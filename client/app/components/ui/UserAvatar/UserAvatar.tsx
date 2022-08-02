import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ avatarPath: string; link: string; title?: string }> = ({
	avatarPath,
	link,
	title
}) => {
	return (
		<Link className={styles.avatar} href={link}>
			<a title={title}>
				<Image src={avatarPath} width={46} height={46} alt="User avatar" />
			</a>
		</Link>
	)
}

export default UserAvatar
