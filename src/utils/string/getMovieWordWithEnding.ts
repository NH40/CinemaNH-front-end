//@ts-ignore
export const getMovieWordWithEnding = (movieCount: number) => {
	switch (movieCount) {
		case 1:
		case 21:
			return `${movieCount} фильм`
		case 2:
		case 3:
		case 4:
		case 22:
		case 23:
		case 24:
			return `${movieCount} фильма`
		default:
			return `${movieCount} фильмов`
	}
}
