'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import styles from './sidebarBottomSection.module.css'

import { CgProfile } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'

const SidebarBottomSection = () => {
  const path = usePathname() // URL from router.
  if (path === '/') {
    return (
      <>
        <div className={styles.container}>
          <Link href="/settings" className={styles.navLink}>
            <IoSettingsOutline />
          </Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.container}>
          <Link href="/profile" className={styles.navLink}>
            <CgProfile />
          </Link>
          <Link href="/settings" className={styles.navLink}>
            <IoSettingsOutline />
          </Link>
        </div>
      </>
    )
  }
}

export default SidebarBottomSection
