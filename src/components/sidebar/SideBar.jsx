'use client'

import React from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link'
import { LuLayoutDashboard } from 'react-icons/lu'
import { PiArticleNyTimes } from 'react-icons/pi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { RiTeamLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topSection}>
          <Link href="/" className={styles.navLink}>
            <LuLayoutDashboard />
          </Link>
          <Link href="/publications" className={styles.navLink}>
            <PiArticleNyTimes />
          </Link>
          <Link href="/journal" className={styles.navLink}>
            <BsFillJournalBookmarkFill />
          </Link>
          <Link href="/followers" className={styles.navLink}>
            <RiTeamLine />
          </Link>
        </div>
        <div className={styles.bottomSection}>
          <Link href="/settings" className={styles.navLink}>
            <IoSettingsOutline />
          </Link>
        </div>
        {/* <div className={styles.arrow}>
          <BsChevronRight />
        </div> */}
      </div>
    </div>
  )
}

export default SideBar
