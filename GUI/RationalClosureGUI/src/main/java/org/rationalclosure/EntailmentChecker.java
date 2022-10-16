package org.rationalclosure;

import org.tweetyproject.logics.pl.syntax.*;

import java.util.ArrayList;

import org.tweetyproject.logics.pl.reasoner.SimplePlReasoner;
import org.tweetyproject.logics.pl.syntax.PlBeliefSet;

public class EntailmentChecker {

    static Boolean checkEntailment(ArrayList<PlBeliefSet> rankedKB, PlFormula formula) {
        SimplePlReasoner classicalReasoner = new SimplePlReasoner();
        PlFormula negationOfAntecedent = new Negation(((Implication) formula).getFormulas().getFirst());
        PlBeliefSet combinedRankedKB = combine(rankedKB);
        while (combinedRankedKB.size() != 0) {
            System.out.println("We are checking whether or not " + negationOfAntecedent.toString() + " is entailed by: "
                    + combinedRankedKB.toString());
            if (classicalReasoner.query(combinedRankedKB, negationOfAntecedent)) {
                System.out.println("It is! so we remove " + rankedKB.get(0).toString());
                combinedRankedKB.removeAll(rankedKB.get(0));
                rankedKB.remove(rankedKB.get(0));
            } else {
                System.out.println("It is not!");
                break;
            }
        }
        if (combinedRankedKB.size() != 0) {
            System.out.println("We now check whether or not the formula" + formula.toString() + " is entailed by "
                    + combinedRankedKB.toString());
            if (classicalReasoner.query(combinedRankedKB, formula)) {
                return true;
            } else {
                return false;
            }
        } else {
            System.out.println("There would then be no ranks remaining, which means the knowledge base entails "
                    + negationOfAntecedent.toString() + ", and thus it entails " + formula.toString()
                    + ", so we know the defeasible counterpart of this implication is also entailed!");
            return true;
        }
    }

    static PlBeliefSet combine(ArrayList<PlBeliefSet> ranks) {
        PlBeliefSet combined = new PlBeliefSet();
        for (PlBeliefSet rank : ranks) {
            combined.addAll(rank);
        }
        return combined;
    }

}
