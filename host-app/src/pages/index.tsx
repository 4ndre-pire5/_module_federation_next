import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Host App</title>
      </Head>
      <Nav>This is my nav from Host</Nav>
      <main className={`${styles.h1}`}>
        <h1>Esta é a página Host</h1>
      </main>
      <Footer />
    </>
  )
}
