import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import("../../../host-app/components/Nav"))
const Footer = dynamic(() => import("../../../host-app/components/Footer"))

export default function Home() {
  return (
    <>
      <Head>
        <title>Remote App</title>
      </Head>

      <Nav>This is the nav in Remote Page</Nav>
      <main className={`${styles.h1} `}>
        <h1>Esta a página Remote</h1>
      </main>
      <Footer></Footer>
    </>
  )
}
