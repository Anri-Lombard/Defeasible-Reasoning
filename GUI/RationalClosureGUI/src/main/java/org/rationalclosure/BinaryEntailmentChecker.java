package org.rationalclosure;

import org.tweetyproject.logics.pl.syntax.*;

import java.util.ArrayList;
import java.util.Arrays;

import org.tweetyproject.logics.pl.reasoner.SimplePlReasoner;
import org.tweetyproject.logics.pl.syntax.PlBeliefSet;

public class BinaryEntailmentChecker {
    static SimplePlReasoner classicalReasoner = new SimplePlReasoner();
    static int rankFromWhichToRemove = -1;

    static Boolean checkEntailmentBinarySearch(PlBeliefSet[] rankedKB, PlFormula formula, int left, int right,
            PlFormula negationOfAntecedent) {
        if (right >= left) {
            int mid = left + ((right - left) / 2);
            // if removing middle one and the ones above it, the negation of the antecedent
            // is still entailed, then its in the top half.
            if (classicalReasoner.query(combine(Arrays.copyOfRange(rankedKB, mid + 1, rankedKB.length)),
                    negationOfAntecedent)) {
                return checkEntailmentBinarySearch(rankedKB, formula, mid + 1, right, negationOfAntecedent);
            }
            // we now know that removing the middle one and those above it results in the
            // negation of the antecedent not being entailed.
            // we must check whether or not putting it back in means the negation of the
            // antecdent is entailed.
            else {
                if (classicalReasoner.query(combine(Arrays.copyOfRange(rankedKB, mid, rankedKB.length)),
                        negationOfAntecedent)) {
                    rankFromWhichToRemove = mid;
                } else { // removing it still means the negation of the antecedent is not entailed. we
                         // know its in the bottom half.
                    return checkEntailmentBinarySearch(rankedKB, formula, left, mid, negationOfAntecedent);
                }
            }
        } else {
            return true;
        }

        if (rankFromWhichToRemove + 1 < rankedKB.length) {
            if (classicalReasoner.query(
                    combine(Arrays.copyOfRange(rankedKB, rankFromWhichToRemove + 1, rankedKB.length)), formula)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    static PlBeliefSet combine(PlBeliefSet[] ranks) {
        PlBeliefSet combined = new PlBeliefSet();
        for (PlBeliefSet rank : ranks) {
            combined.addAll(rank);
        }
        return combined;
    }

}
