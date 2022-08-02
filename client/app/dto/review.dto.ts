import { IReview } from '@/shared/interfaces/review.interface'

export interface IReviewDto extends Pick<IReview, 'description'> {
	movieId: number
}
