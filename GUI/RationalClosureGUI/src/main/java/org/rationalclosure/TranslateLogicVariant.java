package org.rationalclosure;

public class TranslateLogicVariant {

    static String translate(String formula) {
        formula = reformatDefeasibleImplication(formula);
        formula.replaceAll("~", "!");
        formula = formula.replaceAll("&", "&&");
        // formula = formula.replaceAll("|", "||");
        formula = formula.replaceAll("<->", "<=>");
        formula = formula.replaceAll("->", "=>");
        return formula;
    }

    static String reformatDefeasibleImplication(String formula) {
        int index = formula.indexOf("~>");
        formula = "(" + formula.substring(0, index) + ") => (" + formula.substring(index + 2, formula.length()) + ")";
        return formula;
    }
}
