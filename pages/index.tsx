import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Theorem from '../components/Theorem'
import Defenition from '../components/Defenition'

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
  const blockFormula = `\\int_0^\\infty x^2 dx`; 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(scrollPosition);
    if (position > 400) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Defeasible Reasoning Tool</title>
        <meta name="description" content="Learn Defeasible Reasoning for Knowledge Representation step-by-step" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {/* TODO: Make links to places on page */}
        <h1 className={styles.mainHeader}>Defeasible Reasoning Tool</h1>
        <div className={styles.contents}>
          <div className={styles.contentsText}>
            <ol>
              <span>Introduction</span>
              <ul>
                <li>Artificial Intellegence</li>
                <li>Knowledge Representation</li>
                <li>Defeasible Reasoning</li>
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
              <span>Tool Walkthrough</span>
              <ul>
                <li>Downloadable GUI</li>
                <li>How to make queries</li>
                <li>How to add custom databases</li>
              </ul>
              <span>Contributing to the tool</span>
              <ul>
                <li>Contribution Guideline and Github Repository</li>
              </ul>
            </ol>
          </div>
        </div>
        <section className={styles.section}>
          <h1>1. Introduction</h1>

          <h3 className={styles.sectionHeading}>Artificial Intelligence</h3>
          <div className={styles.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ad79nYk2keg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className={styles.sectionSpan}>
            Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed
            to the natural intelligence displayed by animals including humans. AI research has
            been defined as the field of study of intelligent agents, which refers to any system
            that perceives its environment and takes actions that maximize its chance of achieving
            its goals - <strong>Wikipedia</strong>
          </div>

          <h3 className={styles.sectionHeading}>Knowledge Representation</h3>
          <div className={styles.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fXGJcd28SM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </div>
          <div className={styles.sectionSpan}>
            Knowledge representation and reasoning (KRR, KR&R, KR²) is the field of artificial
            intelligence (AI) dedicated to representing information about the world in a form that
            a computer system can use to solve complex tasks such as diagnosing a medical condition
            or having a dialog in a natural language. Knowledge representation incorporates findings
            from psychology[1] about how humans solve problems and represent knowledge in order to
            design formalisms that will make complex systems easier to design and build. Knowledge
            representation and reasoning also incorporates findings from logic to automate various
            kinds of reasoning, such as the application of rules or the relations of sets and subsets
            - <strong>Wikipedia</strong>
          </div>

          <h3 className={styles.sectionHeading}>Defeasible Reasoning</h3>
          <div className={styles.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yf_S4d2BU4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className={styles.sectionSpan}>
            
          </div>
        </section>
        <section className={styles.section}>
          <h1>2. Preferential Reasoning</h1>

          <div>
            <h3 className={styles.sectionHeading}>Preferential Consequence Relations</h3>
          </div>
          <div>
             <Defenition>
             </Defenition>
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
        <section className={styles.section}>
          <h1>3. Tool Walkthrough</h1>
          <div>
            <h3>Downloadable GUI</h3>
          </div>
          <div>
            <h3>How To Make Queries</h3>
          </div>
          <div>
            <h3>How To Add Custom Databases</h3>
          </div>
        </section>
        {
          showScrollUp ?
            <button className={styles.upButton} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Scroll Up</button>
            : ""
        }
      </div>
    </div>
  )
}

export default Home
