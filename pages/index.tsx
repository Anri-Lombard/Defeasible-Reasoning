import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Theorem from '../components/Theorem'

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollUp, setShowScrollUp] = useState(false);

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

          <div>
            <Theorem></Theorem>
          </div>
          <div>
            <Theorem></Theorem>
          </div>
        </section>
        <section className={styles.section}>
          <h1>2. Propositional Logic</h1>

          <div>
            <h3>Syntax</h3>
          </div>
          <div>
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
