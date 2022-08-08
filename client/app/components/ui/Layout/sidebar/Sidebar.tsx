import { FC } from 'react'
import styles from './Sidebar.module.scss'
import Link from "next/link";
import {menu} from "@/ui/Layout/sidebar/menu.data";
import {useRouter} from "next/router";
import cn from "classnames";

const Sidebar: FC = () => {
    const {asPath} = useRouter()
    return (
        <aside className={styles.sidebar}>
            <Link href='/'>
                <a className={styles.logo}>
                    R
                </a>
            </Link>

            <nav className={styles.menu}>
                <ul>
                    {menu.map(item => (
                        <li key={item.link} className={cn(styles.item, {
                            [styles.active]: item.link === asPath
                        })}>
                            <Link href={item.link}>
                                <a>
                                    <item.Icon />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar