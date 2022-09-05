import type { NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Theorem from '../components/Theorem'
import Defenition from '../components/Defenition'

import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

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
              <span>Key Concepts</span>
              <ul>
                <li>Non-monotonic Reasoning</li>
                <li>Minimal Ranked Entailment</li>
                <li>Rational Closure</li>
                <li>Algorithm for Rational Closure</li>
                <li>Defeasible Entailment</li>
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
              <span>About this website</span>
            </ol>
          </div>
        </div>
        <section className={styles.section}>
          <h1>1. Introduction</h1>

          <h3 className={styles.sectionHeading}>1.1 Artificial Intelligence</h3>
          <div className={styles.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ad79nYk2keg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className={styles.sectionSpan}>
            Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed
            to the natural intelligence displayed by animals including humans. AI research has
            been defined as the field of study of intelligent agents, which refers to any system
            that perceives its environment and takes actions that maximize its chance of achieving
            its goals - <strong>Wikipedia</strong>
          </div>

          <h3 className={styles.sectionHeading}>1.2 Knowledge Representation</h3>
          <div className={styles.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fXGJcd28SM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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

          <h3 className={styles.sectionHeading}>1.3 Defeasible Reasoning</h3>
          <div className={styles.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yf_S4d2BU4M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          {/* <div className={styles.sectionSpan}>

          </div> */}
        </section>
        <section className={styles.section}>
          <h1>2. Key Concepts</h1>

          <div>
            <h3 className={styles.sectionHeading}>2.1 Non-monotonic Reasnoning</h3>
            <div className={styles.sectionSpan}>
              <strong>Nonmonotonic reasoning</strong> is an area of research that attempts to formalize different patterns of 
              “common sense” reasoning, by dropping monotonicity as property and investigating how to define 
              reasonable notions of consequences. Humans reason by making assumptions based on the knowledge they have, 
              and then revising those assumptions upon learning new information. Several frameworks were formalized to 
              mimic this pattern known as defeasible reasoning
            </div>
          </div>
          <div>
            <h3 className={styles.sectionHeading}>2.2 Minimal Ranked Entailment</h3>
          </div>
          <div>
            <h3 className={styles.sectionHeading}>2.3 Rational Closure</h3>
          </div>
          <div>
            <h3 className={styles.sectionHeading}>2.4 Algorithm for Rational Closure</h3>
          </div>
          <div>
            <h3 className={styles.sectionHeading}>2.5 Defeasible Entailment</h3>
          </div>
        </section>
        <section className={styles.section}>
          <h1>3. Tool Walkthrough</h1>
          <div>
            <h3 className={styles.sectionHeading}>3.1 Downloadable GUI</h3>
            {/* <Link to={gui} target="_blank" download>Download</Link> */}
            <div className={styles.sectionSpan}>
              <a href="https://github.com/Anri-Lombard/Defeasible-Reasoning/blob/main/GUI/RationalClosureGUI.zip" target="_blank" rel="noreferrer"><u><strong>Click Here To Download GUI</strong></u></a>
            </div>
          </div>
          <div>
            <h3 className={styles.sectionHeading}>3.2 How To Make Queries</h3>
            <div className={styles.sectionSpan}>
              Prerequisites: Make sure you have Python and Java installed on your machine <br /><br />
              <strong>Step 1</strong>: Download the Defeasible Reasoning GUI <br /><br />
              <strong>Step 2</strong>: Add own database along with defeasible query in the form of a .txt file (see section 3.2)<br /><br />
              <strong>Step 3</strong>: Enter the database name without the .txt extension and choose the entailment checker algorithm you need.
              - Regular simply outputs the process whereby Binary outputs &ldquo;true&rdquo; or &ldquo;false&rdquo;
              <strong>Step 4</strong>: Grab a cup of coffee and relax, the rest will be done for you. <br /><br />
              <figure className="p-10 border-2 border-white">
                <Image className="rounded-lg" src="/images/FinalResult.png" alt="final result" layout="responsive" priority width={100} height={100} />
                <figcaption>Final Result</figcaption>
              </figure>
            </div>
          </div>
          <div>
            <h3 className={styles.sectionHeading}>3.3 How To Add Custom Databases</h3>
          </div>
        </section>
        <section className={styles.section}>
          <h1>4. Contributing to the tool</h1>
          <div>
            <h3 className={styles.sectionHeading}>4.1 Contribution Guideline and Github Repository</h3>
          </div>
        </section>
        <section className={styles.section}>
          <h1>5. About This Website</h1>
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
