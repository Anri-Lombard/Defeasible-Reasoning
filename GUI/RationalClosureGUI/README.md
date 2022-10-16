# Tool to perform entailment checks using Rational Closure
## Compile using Maven
```
mvn package
```

## Run jar
```
java -cp target/rationalclosure-1.0-SNAPSHOT-jar-with-dependencies.jar org.rationalclosure.App knowledgebasename.txt entailmentCheckingAlgorithm
```
Knowledge bases must be formatted according to TweetyProject propositional logic syntax, with defeasible implication represented as '~>'.
(http://tweetyproject.org/)
