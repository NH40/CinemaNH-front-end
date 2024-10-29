'use client'

import { FC } from 'react'

import SearchField from '@/components/ui/search/SearchField'

import { useSearch } from '@/hooks/search/useSearch'

import styles from './Search.module.scss'
import SearchList from './search-list/SearchList'

const Search: FC = () => {
	const { handleSearch, searchTerm, isSuccess, data } = useSearch()

	return (
		<div className={styles.search}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
