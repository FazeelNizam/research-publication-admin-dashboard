import Image from 'next/image'
import styles from './journalsTable.module.css'

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'journal',
    headerName: 'Journal',
    width: 600,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          <Image
            src={params.row.img}
            alt="cover"
            width={200}
            height={100}
            className={styles.cellImg}
          />
          <div className={styles.titleContainer}>{params.row.title}</div>
        </div>
      )
    },
  },
  {
    field: 'views',
    headerName: 'Views',
    width: 120,
  },
  {
    field: 'ratings',
    headerName: 'Ratings',
    width: 120,
  },
  {
    field: 'comments',
    headerName: 'Comments',
    width: 120,
  },
]

//temporary data
export const userRows = [
  {
    id: 1,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 354,
    ratings: '8/10',
    comments: 68,
  },
  {
    id: 2,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 45,
    ratings: '8/10',
    comments: 35,
  },
  {
    id: 3,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 12,
    ratings: '9/10',
    comments: 4,
  },
  {
    id: 4,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 65,
    ratings: '7/10',
    comments: 5,
  },
  {
    id: 5,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 75,
    ratings: '8/10',
    comments: 45,
  },
  {
    id: 6,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 35,
    ratings: '8/10',
    comments: 34,
  },
  {
    id: 7,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 45,
    ratings: '6/10',
    comments: 16,
  },
  {
    id: 8,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 5,
    ratings: '8/10',
    comments: 2,
  },
  {
    id: 9,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 54,
    ratings: '8/10',
    comments: 11,
  },
  {
    id: 10,
    title: 'Differentiable Quantum Programming with Unbounded Loops',
    img: '/articlePhoto.jpg',
    views: 65,
    ratings: '8/10',
    comments: 12,
  },
]
