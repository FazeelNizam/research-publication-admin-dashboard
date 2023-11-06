import styles from './followersTable.module.css'

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'user',
    headerName: 'User',
    width: 350,
    renderCell: (params) => {
      return (
        <div className={styles.cellWithImg}>
          <img className={styles.cellImg} src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      )
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
  {
    field: 'university',
    headerName: 'University',
    width: 200,
  },
  {
    field: 'town',
    headerName: 'Town',
    width: 200,
    renderCell: (params) => {
      return <span>{params.row.town}</span>
    },
  },
]

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '1snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '2snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 3,
    username: 'Lannister',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '3snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 4,
    username: 'Stark',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '4snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 5,
    username: 'Targaryen',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '5snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 6,
    username: 'Melisandre',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '6snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 7,
    username: 'Clifford',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '7snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 8,
    username: 'Frances',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '8snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 9,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
  {
    id: 10,
    username: 'Roxie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: 'snow@gmail.com',
    town: 'Colombo',
    university: 'OUSL',
  },
]
