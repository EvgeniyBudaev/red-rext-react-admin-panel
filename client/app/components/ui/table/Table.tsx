import { FC } from 'react'
import {ITableItem} from "@/shared/interfaces/table.interface";
import Loader from "@/ui/Loader/Loader";
import TableItem from "@/ui/table/TableItem";
import styles from './Table.module.scss'

interface ITableProps {
    items: ITableItem[]
    isLoading: boolean
}

const Table: FC<ITableProps> = ({items, isLoading}) => {
    return (
        <div  className="mt-6">
            {isLoading ? <Loader count={3} /> : items?.length
                ? items.map(item => <TableItem item={item} key={item.id} />)
                : <div>Items not found</div>}
        </div>
    )
}

export default Table