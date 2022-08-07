import { FC } from 'react'

interface ILoader {
    count?: number;
}

const Loader: FC<ILoader> = ({count}) => {
    return (
        <div>
            <div>{count}</div>
        </div>
    )
}

export default Loader