import Link from 'next/link'
import style from './style.module.scss'

const scroller = ({ Items, Query, Path }) => {
    return (
        <div className={style.container}>
            {Items.map(({ id, name }, idx) => {
                const link = Query
                        ? `?${Query}=${id}`
                        : `${id}`

                return (
                    <Link href={`${Path ? `${Path}/` : ''}${link}`} key={idx}>
                        <h1 className={style.title}>
                            {name}
                        </h1>
                    </Link>
                )
            })}
        </div>
    );
}


export default scroller;