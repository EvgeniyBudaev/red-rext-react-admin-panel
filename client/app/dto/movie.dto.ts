import { IMovie } from '@/shared/interfaces/movie.interface'

export interface IMovieDto extends Pick<IMovie, 'name' | 'fees' | 'poster'> {}
