import React from 'react'
import styles from './publicationCard.module.css'
import Image from 'next/image'

const PublicationCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.publicationCard}>
        <div className={styles.detailsContainer}>
          <div className={styles.leftContainer}>
            <Image
              src="/articlePhoto.jpg"
              alt="article"
              width={220}
              height={110}
            />
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.titleContainer}>
              <span>
                Differentiable Quantum Programming with Unbounded Loops
              </span>
            </div>
            <div className={styles.buttonContainer}>button</div>
          </div>
        </div>
        <div className={styles.statContainer}>
          <span>20/10/2023</span>
          <span>19</span>
          <span>8/10</span>
          <span>12</span>
          <span>26</span>
        </div>
      </div>
    </div>
  )
}

export default PublicationCard
