import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Button from '../../components/button'
import dynamic from 'next/dynamic'

const Nav = dynamic(()=> import("../../../host-app/components/navbar/mainConteiner"))

export default function Home() {
  return (
    <>
      <Head>
        <title>Remote App</title>
      </Head>
      <Nav>Esta é a navbar em Remote Page</Nav>
      <main className={`${styles.h1} `}>
        <h1>Esta a página Remote</h1>
        <Button />
      </main>
    </>
  )
}
