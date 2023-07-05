"use client"
import React, { useState, useEffect } from 'react'
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
                    <img key={idx} src={imgPath} className={`${style.background} ${idx == CurrentImg && style.active}`} />
                )}
                <div className={style.viewer}>
                    <div className={style.button} id={style.left} onClick={() => {
                        let newIdx = CurrentImg > 0
                            ? CurrentImg - 1
                            : images.length - 1

                        setCurrentImg(newIdx)
                    }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z"></path></svg></div>
                    <div className={style.port} />
                    <div className={style.button} id={style.right} onClick={() => {
                        let newIdx = CurrentImg < (images.length - 1)
                            ? CurrentImg + 1
                            : 0

                        setCurrentImg(newIdx)
                    }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path></svg></div>
                </div>
            </div>
        </>
    )
}

export default Index