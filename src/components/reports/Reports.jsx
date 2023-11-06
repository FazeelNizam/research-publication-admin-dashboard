import React from 'react'
import styles from './reports.module.css'
import { BsChevronDown } from 'react-icons/bs'
import Card from '../card/Card'
import Image from 'next/image'
import { CardData } from '../data/cardData'
import Link from 'next/link'

const Reports = () => {
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <p>Report</p>
        <button className={styles.btn}>
          This Month <BsChevronDown />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {CardData.map((card) => (
          <Link href="/">
            <div className={styles.card}>
              <Image src={card.img} width={60} height={53} alt={card.title} />
              <p>{card.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Reports
