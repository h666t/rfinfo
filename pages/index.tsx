import type {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';

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
        <div className={'menu'}></div>
    </div>
    <div className={styles.firstScreen}></div>
  </>)
}

export default Home
