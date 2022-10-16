package org.rationalclosure;

import org.tweetyproject.logics.pl.syntax.*;

import java.util.*;

import org.tweetyproject.logics.pl.syntax.PlBeliefSet;
import org.tweetyproject.logics.pl.reasoner.SimplePlReasoner;
import org.tweetyproject.logics.pl.reasoner.SatReasoner;
import org.tweetyproject.logics.pl.sat.Sat4jSolver;
import org.tweetyproject.logics.pl.sat.SatSolver;

public class BaseRank {

    static ArrayList<PlBeliefSet> rank(PlBeliefSet kb, PlBeliefSet classicalStatements) {
        SatSolver.setDefaultSolver(new Sat4jSolver());
        SatReasoner reasoner = new SatReasoner();
        ArrayList<PlBeliefSet> rankedKB = new ArrayList<PlBeliefSet>();
        PlBeliefSet currentMaterialisation = kb;
        PlBeliefSet prevMaterialisation = new PlBeliefSet();

        while (!currentMaterialisation.equals(prevMaterialisation)) {
            prevMaterialisation = currentMaterialisation;
            currentMaterialisation = new PlBeliefSet();
            for (PlFormula f : prevMaterialisation) {
                if (f.toString().contains("=>")) {
                    if (reasoner.query(prevMaterialisation, new Negation(((Implication) f).getFormulas().getFirst()))) {
                        currentMaterialisation.add(f);
                    }
                }
            }
            PlBeliefSet newRank = new PlBeliefSet();
            for (PlFormula form : prevMaterialisation) {
                if (!classicalStatements.contains(form)) {
                    newRank.add(form);
                }
            }
            newRank.removeAll(currentMaterialisation);
            if (newRank.size() != 0) {
                rankedKB.add(newRank);
                System.out.println("Added rank " + Integer.toString(rankedKB.size() - 1));
            } else {
                classicalStatements.addAll(currentMaterialisation);
            }
        }
        rankedKB.add(classicalStatements);
        System.out.println("Base Ranking of Knowledge Base:");
        for (PlBeliefSet rank : rankedKB) {
            if (rankedKB.indexOf(rank) == rankedKB.size() - 1) {
                System.out.println("Infinite Rank:" + rank.toString());
            } else {
                System.out.println("Rank " + Integer.toString(rankedKB.indexOf(rank)) + ":" + rank.toString());
            }
        }
        return rankedKB;
    }

}
