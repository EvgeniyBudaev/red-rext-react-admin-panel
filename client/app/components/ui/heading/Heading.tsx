import {FC, PropsWithChildren} from 'react'
import cn from "classnames";
import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<{className?: string, isMargin?: boolean}>> = ({children, className, isMargin}) => {
    return (
        <div className={cn(styles.heading, className, isMargin?  styles.margin : '')}>{children}</div>
    )
}

export default Heading