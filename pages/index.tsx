import type {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import helperStyles from "../styles/helper.module.css"

 export const getServerSideProps: GetServerSideProps = async ({req})=>{
  // let x = await axios.get(`${process.env.MY_API_PREFIX}/api/hello`)
  //  console.log(x);
  return {
    props: {

    }
  }
 }

const Home: NextPage = (prop) => {
  return (<>
    <div className={styles.topBar}>
        <div className={styles.logo}></div>
        <div className={styles.menu}></div>
    </div>
    <div className={styles.firstScreen}>
      <div className={styles.firstScreenTitleContainer}>
        <div className={`${helperStyles.oneLine} ${styles.title}`}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
        <div className={styles.description}>愿所有的美好如约而至，愿所有的黑暗都能看到希望，我们都能微笑前行，人生没有完美，有些遗憾才美...</div>
      </div>
    </div>
  </>)
}

export default Home
