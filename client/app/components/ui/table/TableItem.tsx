import { FC } from 'react'
import Image from 'next/image'
import {ITableItem} from "@/shared/interfaces/table.interface";
import Link from "next/link";
import {HiOutlineExternalLink, HiOutlinePencil, HiOutlineTrash} from "react-icons/hi";
import styles from './Table.module.scss'

interface ITableItemProps {
    item: ITableItem
}

const TableItem: FC<ITableItemProps> = ({item}) => {
    return (
        <div  className={styles['table-item']}>
            <div className={styles.info}>
                {item.image && (
                    <Image src={item.image} alt={item.name} width={40} height={61} />
                )}
                <div>{item.name}</div>
            </div>

            <div className={styles.actions}>
                <a
                    className="text-primary"
                    rel="noreferrer"
                    href={item.viewLink}
                    target="_blank"
                >
                    <HiOutlineExternalLink />
                </a>
                <Link href={item.editLink}>
                    <a className="text-blue-500">
                        <HiOutlinePencil />
                    </a>
                </Link>
                <button onClick={item.removeHandler}>
                    <HiOutlineTrash />
                </button>
            </div>
        </div>
    )
}

export default TableItem