import Link from 'next/link';
import Head from 'next/head';


import Contact from "../comps/Contact";
import Skills from "../comps/Skills";
import Projects from "../comps/Projects";
import About from './About'

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.name}>
        <img src='/me1.jpg' className={styles.photo} />
          {/* Find solid font*/}
          <h1>
            Justin Valdez,
            <br></br>
            Web Developer.
          </h1>
          
        </div>
        
      </header>
      <section className={styles.section}>
          <br></br>
          <Skills />
          <br></br>
          <Projects />
          <br></br>
        <Contact />
        {/* Consider mentioning that you are available for hire */}
        {/* Consider a services section... link to fiver? */}
      </section>    
    </>
  );
}