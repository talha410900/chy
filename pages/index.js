import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from 'Components/Navbar'
import Section1 from 'Components/Section1'
import Section2 from 'Components/Section2'
import Section3 from 'Components/Section3'
import Footer from 'Components/Footer'
import Section4 from 'Components/Section4'
import Section5 from 'Components/Section5'
import Section6 from 'Components/Section6'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Section1 />
      <div className="max-w-[1280px] mx-auto px-4">
        <Section4 />
      </div>
      <Section2 />
      <Section5 />
      <Section6 />

      <Section3 />
      <Footer />
    </>
  )
}
