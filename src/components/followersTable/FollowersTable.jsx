'use client'

import React, { useState } from 'react'
import styles from './followersTable.module.css'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import Link from 'next/link'

import { userColumns, userRows } from './data'

const FollowersTable = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link href="/followers">
              <div className={styles.viewButton}>View</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]
  return (
    <div className={styles.datatable}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        rowHeight={60}
        slots={{ toolbar: GridToolbar }}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default FollowersTable
