'use client'

import React, { useState } from 'react'
import Banner from '../banner/Banner'
import Reports from '../reports/Reports'
import Activities from '../activities/Activities'
import Profile from '../profile/Profile'
import Image from 'next/image'
import styles from './landingPage.module.css'

import { RxCross2 } from 'react-icons/rx'

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <main className={isOpen ? styles.container : styles.fullScreenContainer}>
      <section className={isOpen ? styles.leftSection : styles.fullScreen}>
        <Banner />
        <Reports />
        <Activities />
      </section>
      {isOpen && (
        <section className={styles.rightSection}>
          <Profile />
          <button className={styles.closeBtn} onClick={() => setOpen(false)}>
            <RxCross2 />
          </button>
        </section>
      )}
      <button
        className={isOpen ? styles.hideContainer : styles.imageContainer}
        onClick={() => setOpen(true)}
      >
        <Image
          className={styles.dp}
          src="/dp.png"
          alt="dp"
          width={50}
          height={50}
        />
      </button>
    </main>
  )
}

export default LandingPage
