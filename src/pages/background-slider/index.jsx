import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import style from './index.module.scss'

const images = [
    '/assets/images/books-g15c12fe1f_1920.jpg',
    '/assets/images/earth-gfd417e778_1920.jpg',
    '/assets/images/hd-wallpaper-g5f03940ab_1920.jpg',
    '/assets/images/hd-wallpaper-g188e91203_1920.jpg',
    '/assets/images/nature-g3f7c1a124_1920.jpg',
]

const Index = () => {
    const [CurrentImg, setCurrentImg] = useState(0)

    return (
        <>
            <div className={style.container}>
                {images.map((imgPath, idx) =>
                    <img src={imgPath} className={`${style.background} ${idx == CurrentImg && style.active}`} />
                )}
                <div className={style.viewer}>
                    <div className={style.button} id={style.left} onClick={() => {
                        let newIdx = CurrentImg > 0
                            ? CurrentImg - 1
                            : images.length - 1

                        setCurrentImg(newIdx)
                    }}>LEFT</div>
                    <div className={style.port} />
                    <div className={style.button} id={style.right} onClick={() => {
                        let newIdx = CurrentImg < (images.length - 1)
                            ? CurrentImg + 1
                            : 0

                        setCurrentImg(newIdx)
                    }}>RIGHT</div>
                </div>
            </div>
        </>
    )
}

export default Index