import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'

import styles from './index.module.scss'

const Home = ({  }) => {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <span className={styles.title}>Next.js Boilerplate.</span>
        </>
    )
}

export default Home