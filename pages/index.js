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
      <Head>
        <title>Justin Valdez</title>
        <meta name="keywords" content="Free Lance" />
      </Head>
      <header className={styles.header}>
        <img src='/cat.jpg' className={styles.photo} />
        <div className={styles.name}> 
          {/* Find solid font*/}
          <h1>Justin Valdez,</h1>
          <h2>Free lance web developer.</h2>
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