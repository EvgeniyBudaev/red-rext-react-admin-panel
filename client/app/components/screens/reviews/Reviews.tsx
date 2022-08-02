import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IReview } from '@/shared/interfaces/review.interface'

import AddReviewForm from './AddReviewForm'

const Reviews: FC<{ movieId: number; reviews: IReview; refetch: any }> = ({
	movieId,
	reviews,
	refetch
}) => {
	const { user } = useAuth()
	return (
		<>
			<div>{user && <AddReviewForm movieId={movieId} refetch={refetch} />}</div>
		</>
	)
}

export default Reviews
