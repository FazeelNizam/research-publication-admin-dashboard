import React from 'react'
import styles from './journal.module.css'
import JournalsTable from '@/components/journalsTable/JournalsTable'

const Journal = () => {
  return (
    <div className={styles.container}>
      <h1>Journals</h1>
      <JournalsTable />
    </div>
  )
}

export default Journal
