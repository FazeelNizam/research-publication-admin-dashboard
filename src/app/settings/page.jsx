import React from 'react'
import styles from './profileSettings.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { FiEdit3 } from 'react-icons/fi'
import { BsLink45Deg } from 'react-icons/bs'

const ProfileSetting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Public Profile</h1>
        <hr />
        <section className={styles.firstSection}>
          <div className={styles.dpContainer}>
            <span>Profile Picture</span>
            <Link href="/profile" className={styles.imageContainer}>
              <Image
                className={styles.dp}
                src="/dp.png"
                alt="dp"
                width={180}
                height={180}
              />
              <div className={styles.editDP}>
                <FiEdit3 />
                Edit
              </div>
            </Link>
          </div>
          <div className={styles.edits}>
            <div className={styles.textArea}>
              <span>Name</span>
              <textarea name="name" id="name" rows="1"></textarea>
            </div>
            <div className={styles.textArea}>
              <span>Email</span>
              <textarea name="email" id="email" rows="1"></textarea>
            </div>
            <div className={styles.textArea}>
              <span>Password</span>
              <textarea name="password" id="password" rows="1"></textarea>
            </div>
            <div className={styles.textArea}>
              <span>Bio</span>
              <textarea name="bio" id="bio" rows="5"></textarea>
            </div>
            <div className={styles.textArea}>
              <span>Social Accounts</span>
              <div className={styles.socialLinkContainer}>
                <BsLink45Deg />
                <textarea name="link1" id="link1" rows="1"></textarea>
              </div>
              <div className={styles.socialLinkContainer}>
                <BsLink45Deg />
                <textarea name="link2" id="link2" rows="1"></textarea>
              </div>
              <div className={styles.socialLinkContainer}>
                <BsLink45Deg />
                <textarea name="link3" id="link3" rows="1"></textarea>
              </div>
            </div>
            <div className={styles.textArea}>
              <span>University</span>
              <textarea name="university" id="university" rows="1"></textarea>
            </div>
            <div className={styles.textArea}>
              <span>Location</span>
              <textarea name="location" id="location" rows="1"></textarea>
            </div>
            <div className={styles.agree}>
              <input type="checkbox" id="agree" name="agree" value="agree" />
              <label for="agree">Agree to Terms & Conditions</label>
            </div>
            <button className={styles.btn}>Update Profile</button>
          </div>
        </section>
        <div className={styles.delete}>
          <h1>Delete Account</h1>
          <hr />
          <section className={styles.secondSection}>
            <p>
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button className={styles.btn}>Delete your account</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProfileSetting
