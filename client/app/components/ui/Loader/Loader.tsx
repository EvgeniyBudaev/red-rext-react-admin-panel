import { FC } from 'react'
import Skeleton, {SkeletonProps} from 'react-loading-skeleton'

const Loader: FC<SkeletonProps> = (props) => {
    return <Skeleton baseColor='#D7E3FF' highlightColor='#E8EDFB' {...props} />
}

export default Loader