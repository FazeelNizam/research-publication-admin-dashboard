import React from 'react'
import styles from './followers.module.css'
import FollowersTable from '@/components/followersTable/FollowersTable'

const Followers = () => {
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <FollowersTable />
    </div>
  )
}

export default Followers
