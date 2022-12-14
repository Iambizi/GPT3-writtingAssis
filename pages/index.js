import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextBox from '../components/textBox'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Galada&family=Modak&family=Oooh+Baby&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>LT</span> 's AI assistant
        </h1>
        <TextBox />
      </main>
      <footer className={styles.footer}> 
          Likkle P.O.C for L.T.
          <span className={styles.version}>Tis version 0.1.0</span>
      </footer>
    </div>
  )
}
