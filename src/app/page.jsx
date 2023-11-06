import styles from './homepage.module.css'
import LandingPage from '@/components/landingPage/LandingPage'

const Home = () => {
  return (
    <main className={styles.container}>
      <LandingPage />
    </main>
  )
}

export default Home
