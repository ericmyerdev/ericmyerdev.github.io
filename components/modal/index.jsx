"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"

import style from './style.module.scss'

const Modal = ({ children }) => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(pathname.split('/').includes('projects'))
    }, [pathname])
    return (
        <div className={isOpen ? style['open'] : style['close']}>
            {children}
        </div>
    );
}

export default Modal;