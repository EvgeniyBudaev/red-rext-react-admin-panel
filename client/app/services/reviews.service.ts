import axios from 'axios'
import { IReviewDto } from 'dto/review.dto'

import { IReview } from '@/shared/interfaces/review.interface'

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return axios.post<IReview>(`/review`, body)
	}
}
