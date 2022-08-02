import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Layout from '@/components/ui/Layout/Layout'

import { MovieService } from '@/services/movie.service'

import styles from './Movie.module.scss'

const Movie: FC = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)

	const { refetch, data: movie } = useQuery(
		['get movie', query?.id],
		() => MovieService.getMovieById(movieId),
		{
			select: ({ data }) => data
		}
	)

	return (
		<Layout title={`${movie?.name} - RED Cinema`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					<Image
						src={movie?.poster || ''}
						alt={movie?.name}
						width={220}
						height={330}
						layout="responsive"
						className={styles.image}
					/>
					<div className={styles.rating}>{movie?.rating}</div>
				</div>

				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.title}>
						<ul>
							<li>
								<span>Сборы в мире</span>
								<span>${movie?.fees.toLocaleString()}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Movie
