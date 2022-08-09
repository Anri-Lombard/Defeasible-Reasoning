import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Theorem from '../components/Theorem'

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
        <h1 className={styles.mainHeader}>Defeasible Reasoning</h1>
        <div className={styles.contents}>
          <div className={styles.contentsText}>
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
        </div>
        <section className={styles.section}>
          <h1>Propositional Logic</h1>

          <div>
            <h3>Syntax</h3>
            <Theorem></Theorem>
          </div>
          <div>
            <h3>Symantics</h3>

          </div>
          <div>
            <h3>Deductive Systems</h3>

          </div>
          <div>
            <h3>Consequence Relations</h3>
          </div>
          <div>
            <h3>Classical Deduction</h3>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
