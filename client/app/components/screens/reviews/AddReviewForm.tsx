import { useMutation } from '@tanstack/react-query'
import { IReviewDto } from 'dto/review.dto'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/components/ui/Field/Field'

import { ReviewService } from '@/services/reviews.service'

import styles from './AddReviewForm.module.scss'

const AddReviewForm: FC<{ movieId: number; refetch: any }> = ({
	movieId,
	refetch
}) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IReviewDto>({
		mode: 'onChange'
	})

	const { mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.createReview({ ...data, movieId }),
		{
			onSuccess() {
				reset()
				refetch()
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewDto> = async data => {
		await mutateAsync(data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.description}>
				<Field
					{...register('description', {
						required: 'Description is required'
					})}
					placeholder="Add a public review"
					error={errors.description}
				/>

				<button className={styles.button}>Send</button>
			</div>
		</form>
	)
}

export default AddReviewForm
