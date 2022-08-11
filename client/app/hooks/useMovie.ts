import {useRouter} from "next/router";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {MovieService} from "@/services/movie.service";

export const useMovie = () => {
    const {push} = useRouter()
    const queryClient = useQueryClient()

    const {data: response, isLoading} = useQuery(['get all movies'], () => MovieService.getAll())

    const {mutate} = useMutation(['remove movie'], (id: number) =>
        MovieService.deleteMovie(id), {
        onSuccess() {
            queryClient.invalidateQueries(['get all movies'])
        }
    })

    const {mutate:create} = useMutation(['create movie'], () =>
        MovieService.createMovie(), {
        onSuccess: ({data: id}) => {
            push(`/manage/movies/edit/${id}`)
        }
    })

    return {
        response,
        isLoading,
        mutate,
        create
    }
}