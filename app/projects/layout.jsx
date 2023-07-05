import Link from "next/link"
import style from './style.module.scss'

const layout = ({ children }) => {
    return (
        <>
            <Link className={style['link']} href={'/'}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 13v7l-8-8 8-8v7h8v2z"></path></g></svg>
                back
            </Link>
            <div className={`${style['projectContainer']}`}>{children}</div>
        </>
    );
}

export default layout;