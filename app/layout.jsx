import Image from 'next/image'
import Link from 'next/link'

import '../styles/global.scss'
import style from './layout.module.scss'
import utilStyle from '../styles/utils.module.scss'

export const metadata = {
    title: 'Daily Projects',
    description: 'Projects I complete in one day'
}

const Layout = ({ children }) => {
    return (
        <html>
            <body>
                    {children}
            </body>
        </html>
    );
}

export default Layout