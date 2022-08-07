import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IReviewDto } from 'dto/review.dto'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '@/components/ui/Field/Field'
import { ReviewService } from '@/services/reviews.service'
import styles from './AddReviewForm.module.scss'


const AddReviewForm: FC<{ movieId: number; }> = ({
	movieId,
}) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IReviewDto>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const { mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.createReview({ ...data, movieId }),
		{
			async onSuccess() {
				reset()
				await queryClient.invalidateQueries(['get movie', movieId.toString()])
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
