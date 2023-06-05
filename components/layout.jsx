import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import style from './layout.module.scss'
import utilStyle from '../styles/utils.module.scss'

const name = 'Eric Myer'
export const siteTitle = 'Next.js Boilerplate'

const Layout = ({ children }) => {
    return (
        <div className={`${style.container}`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name='description'
                    content='Next.js Boilerplate'
                />
            </Head>
            {children}
        </div>
    );
}

export default Layout