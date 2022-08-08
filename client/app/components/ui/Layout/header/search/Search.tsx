import { FC } from 'react'
import styles from './Search.module.scss'
import Field from "@/ui/Field/Field";
import {BiSearch} from "react-icons/all";
import MovieItem from "@/ui/MovieItem/MovieItem";
import {useSearch} from "@/ui/Layout/header/search/useSearch";
import {menuAnimation} from "@/utils/animation/fade";
import { motion } from 'framer-motion'

const Search: FC = () => {
    const { data, handleSearch, searchTerm, isSuccess } = useSearch()

    return (
        <div className={styles.search_top}>
            <label>
                <Field
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={handleSearch}
                    Icon={BiSearch}
                />
            </label>
            {isSuccess && (
                <motion.div
                    initial={false}
                    animate={isSuccess ? 'open' : 'closed'}
                    variants={menuAnimation}
                    className={styles.result}
                >
                    {data?.length ? (
                        data.map(movie => <MovieItem movie={movie} key={movie.id} />)
                    ) : (
                        <div>Movies not found!</div>
                    )}
                </motion.div>
            )}
        </div>
    )
}

export default Search