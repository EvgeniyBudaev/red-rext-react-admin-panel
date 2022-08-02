import { FC } from 'react'

import Logo from '@/ui/Layout/header/Logo'
import LoginForm from '@/ui/Layout/header/loginForm/LoginForm'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	)
}

export default Header
