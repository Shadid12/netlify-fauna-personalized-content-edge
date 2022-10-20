import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  return {
    props: {
      message: "This is a static page — and a prop",
    },
  };
}

export default function Marketing({message, promotion}) {
  return (
    <div className={styles.container}>
      <h1>Marketing Page</h1>
      <p id="message">{message}</p>
      <div className={styles.btnWrap}>
        <Link href="/"><a className={styles.link}>Home</a></Link>
      </div>
    </div>
  )
}