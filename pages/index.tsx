import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Defeasible Reasoning</title>
        <meta name="description" content="Learn Defeasible Reasoning for Knowledge Representation step-by-step" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* TODO: Make links to places on page */}
        <h1>Defeasible Reasoning</h1>
        <div className={styles.contents}>

          <h3 className={styles.contentsHeader}>Content</h3>
          <ol>
            <span>Propositional logic</span>
            <ul>
              <li>Syntax</li>
              <li>Symantics</li>
              <li>Deductive Systems</li>
              <li>Consequence Relations</li>
              <li>Classical Deduction</li>
            </ul>
            <span>Approaches to Defeasible Reasoning</span>
            <ul>
              <li>Belief Revision</li>
              <li>Circumscription</li>
              <li>Default Logic</li>
              <li>Propositional Typicality Logic</li>
              <li>Nonmonotonic Modal Logic</li>
              <li>Autoepistemic Logic</li>
              <li>Preferential Approach</li>
            </ul>
            <span>Preferential Reasoning</span>
            <ul>
              <li>Preferential Consequence Relations</li>
              <li>Preferential Interpretations</li>
              <li>Ranked Interpretations</li>
              <li>Preferential Entailment</li>
              <li>Ranked Entailment</li>
            </ul>
            <span>Nonmonotonic Reasoning</span>
            <ul>
              <li>Minimal Ranked Entailment</li>
              <li>Rational Closure</li>
              <li>Algorithm for Rational Closure</li>
              <li>Rational Entailment</li>
            </ul>
          </ol>
        </div>
        <div>
          Atoms <span className="hover:scale-115 m-5">this</span>
        </div>
      </div>
    </div>
  )
}

export default Home
