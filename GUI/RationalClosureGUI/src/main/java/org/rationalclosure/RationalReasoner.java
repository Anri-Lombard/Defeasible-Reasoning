package org.rationalclosure;

import org.tweetyproject.logics.pl.syntax.*;

import java.util.ArrayList;

import org.tweetyproject.logics.pl.parser.PlParser;

import org.tweetyproject.logics.pl.syntax.PlBeliefSet;

public class RationalReasoner {
    PlBeliefSet knowledgeBase;
    PlParser parser;
    PlFormula formulaToCheckEntailmentFor;

    RationalReasoner(PlBeliefSet kb, PlFormula formula, PlBeliefSet classicalStatements,
            String entailmentCheckingAlgorithm) {
        this.knowledgeBase = kb;
        this.parser = new PlParser();
        this.formulaToCheckEntailmentFor = formula;
        ArrayList<PlBeliefSet> rankedKnowledgeBase = BaseRank.rank(kb, classicalStatements);

        System.out.println("Explanation:");
        if (entailmentCheckingAlgorithm.equals("binary")) {
            PlBeliefSet[] rankedKnowledgeBaseArray = new PlBeliefSet[rankedKnowledgeBase.size()];
            PlBeliefSet[] rankedKBArray = rankedKnowledgeBase.toArray(rankedKnowledgeBaseArray);
            PlFormula negationOfAntecedent = new Negation(((Implication) formula).getFormulas().getFirst());
            System.out.println(BinaryEntailmentChecker.checkEntailmentBinarySearch(rankedKBArray, formula, 0,
                    rankedKnowledgeBase.size(), negationOfAntecedent));
        } else if (entailmentCheckingAlgorithm.equals("regular")) {
            System.out.println(EntailmentChecker.checkEntailment(rankedKnowledgeBase, formula));
        }
    }
}
