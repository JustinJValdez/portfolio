import Link from "next/link";
import Head from 'next/head';

import Contact from "../comps/Contact";
import Photo from "../comps/Photo";
import Skills from "../comps/Skills";
import Projects from "../comps/Projects";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      
      <Head>
        <title>Justin Valdez's Portfolio</title>
      </Head>
      <div className={styles.background}>
        <div className={styles.text}>
          <Photo />
          <br></br>
          <Skills />
          <br></br>
          <Projects />
          <br></br>
          <Contact />
        </div>
        
      </div>
    </>
  );
}