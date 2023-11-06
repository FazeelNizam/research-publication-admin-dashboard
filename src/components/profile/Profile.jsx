import React, { useState } from 'react'
import styles from './profile.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { PiArticleNyTimes } from 'react-icons/pi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { RiTeamLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { BsEmojiSmile } from 'react-icons/bs'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { AiOutlineStar } from 'react-icons/ai'

const Profile = () => {
  return (
    <div className={styles.container}>
      <h2>My Profile</h2>
      <div className={styles.dpContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.dp}
            src="/dp.png"
            alt="dp"
            width={180}
            height={180}
          />
          <div className={styles.dpDeco}>
            <Image src="/dpDeco.png" width={420} height={190} alt="dpDeco" />
          </div>
        </div>
        <div className={styles.aboutConatiner}>
          <p>Derisha Mark</p>
          <p>PhD | Senior Lecturer at Harvard University, Cambridge</p>
          <button className={styles.aboutBtn}>Edit Profile</button>
        </div>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <BsEmojiSmile /> Edit Bio
        </Link>
        <Link href="/">
          <CgProfile /> Your Profile
        </Link>
        <Link href="/">
          <PiArticleNyTimes /> Your Articles
        </Link>
        <Link href="/">
          <BsFillJournalBookmarkFill /> Your Journals
        </Link>
        <Link href="/">
          <RiTeamLine /> Your Team
        </Link>
        <Link href="/">
          <LiaChalkboardTeacherSolid /> Reviwers
        </Link>
        <Link href="/">
          <AiOutlineStar /> Rating
        </Link>
        <hr />
        <Link href="/">Sign out</Link>
      </div>
    </div>
  )
}

export default Profile
