import React from 'react'
import styles from './banner.module.css'
import { AiOutlineFileAdd } from 'react-icons/ai'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bottomSection}>
        <div className={styles.bannerTextContainer}>
          <h3>Hi, Dr. Derisha, </h3>
          <p>Welcome Back</p>
          <Image
            className={styles.dashboardImage}
            src="/dashboardImage.svg"
            width={220}
            height={294}
            alt="dashboardImage"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
