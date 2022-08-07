import { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import AddReviewForm from './AddReviewForm'
import { IReviews } from '@/shared/interfaces/review.interface'
import ReviewItem from './ReviewItem/ReviewItem'
import Loader from '@/components/ui/Loader/Loader'
import styles from './Reviews.module.scss'

const Reviews: FC<IReviews> = ({
	movieId,
	reviews,
	isLoading,
}) => {
	const { user } = useAuth()
	return (
		<div className='mt-10'>
			<div>{user && <AddReviewForm movieId={movieId} />}</div>
			{
				isLoading ? <Loader count={4} /> : reviews?.length ? (
					<div className={styles.grid}>
						{reviews.map(review => (
							<ReviewItem review={review} key={review.id} />
						))}
					</div>
				) : (
					<p>Reviews not found!</p>
				)
			}
		</div>
	)
}

export default Reviews
