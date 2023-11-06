import React from 'react'
import styles from './publication.module.css'
import PublicationTable from '@/components/publicationTable/PublicationTable'

const Publication = () => {
  return (
    <div className={styles.container}>
      <h1>Articles</h1>
      <PublicationTable />
    </div>
  )
}

export default Publication
