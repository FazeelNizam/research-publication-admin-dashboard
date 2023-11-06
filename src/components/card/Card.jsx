import Image from 'next/image'
import React from 'react'
import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <Image src="/articlecard.png" width={60} height={53} alt="article" />
      <p>Your Articles</p>
    </div>
  )
}

export default Card
