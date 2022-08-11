import { FC } from 'react'
import Layout from "@/ui/Layout/Layout";
import {useRouter} from "next/router";
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {IMovieDto} from "../../../../../dto/movie.dto";
import {useMutation, useQuery} from "@tanstack/react-query";
import {MovieService} from "@/services/movie.service";
import Heading from "@/ui/heading/Heading";
import Loader from "@/ui/Loader/Loader";
import Field from "@/ui/Field/Field";
import UploadField from "@/ui/UploadField/UploadField";
import {IMediaResponse} from "@/services/media.service";
import Button from "@/ui/Button/Button";

const MovieEdit: FC = () => {
    const {query, push} = useRouter()
    const movieId = Number(query.id)

    const {
        register,
        formState: { errors },
        control,
        handleSubmit,
        setValue
    } = useForm<IMovieDto>({
        mode: 'onChange'
    })

    const {isLoading} = useQuery(
        ['get movie by id', movieId],
        () => MovieService.getMovieById(movieId),
        {
            onSuccess: ({data}) => {
              setValue('name', data.name)
              setValue('fees', data.fees)
              setValue('poster', data.poster)
            },
            enabled: !!movieId
        }
    )

    const { mutate } = useMutation(['update movie', movieId], (data: IMovieDto) =>
    MovieService.updateMovie(movieId, data), {
        onSuccess() {
            push('/manage/movies')
        }
    })

    const onSubmit: SubmitHandler<IMovieDto> = (data) => {
        mutate(data)
    }

    return (
        <Layout title="Movie edit">
            <Heading>Edit movie</Heading>
            {
                isLoading ? <Loader count={4} /> : (
                    <form onSubmit={handleSubmit(onSubmit)} className="w-1/3">
                        <Field
                             {...register('name', {required: 'Name is required'})}
                             placeholder="Name"
                             error={errors.name}
                        />
                        <Field
                             {...register('fees', {
                                 required: 'Fees is required',
                                 valueAsNumber: true
                             })}
                            type='number'
                             placeholder="Fees ($)"
                             error={errors.fees}
                        />
                        <div className="my-8">
                            <Controller
                                control={control}
                                name="poster"
                                render={({field: {onChange, value}}) => (
                                    <UploadField
                                        folder="posters"
                                        onChange={(value: IMediaResponse) => {
                                            onChange(value.url)
                                        }}
                                        value={value}
                                    />
                                )}
                            />
                        </div>

                        <Button>Save</Button>
                    </form>
                )
            }
        </Layout>
    )
}

export default MovieEdit