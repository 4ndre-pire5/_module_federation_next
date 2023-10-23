import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Host App</title>
      </Head>
      <Navbar />
      <main className={`${styles.h1}`}>
        <h1>Esta é a página Host</h1>
      </main>
    </>
  )
}
