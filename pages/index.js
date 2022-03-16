import Link from 'next/link';
import Head from 'next/head';

import Contact from "../comps/Contact";
import Skills from "../comps/Skills";
import Projects from "../comps/Projects";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Valdez's Portfolio</title>
      </Head>
      <header className={styles.header}>
      <img src='/cat.jpg' className={styles.photo} />
        <h1 className={styles.title}>Justin Valdez
          <br></br>
        Web Developer</h1>
      </header>
      <section className={styles.section}>
        
          <br></br>
          <Skills />
          <br></br>
          <Projects />
          <br></br>
          <Contact />
      </section>
      
    </>
  );
}