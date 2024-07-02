"use client";


import Image from "next/image";
import styles from "./page.module.css";
import React from 'react'

export default function Home() {


  const fetchData = async () => {
    const resultContainer = document.getElementById('result');
    try {
      const response = await fetch('/api/hello');
      const result = await response.json();
      resultContainer.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
      console.error('Error fetching data:', error);
      resultContainer.textContent = 'Error fetching data';
    }
  };


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>

        <button onClick={fetchData}>Fetch</button>
        <pre id="result"></pre>




      </div>
    </main>
  );
}
