import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IGenreEditInput } from '@/types/genre.types'

import { genreService } from '@/service/genre.service'

export const useGenreEdit = (genreId: string) => {
	const { data: genre, isLoading } = useQuery({
		queryKey: ['get genre by id:', genreId],
		queryFn: () => genreService.getById(genreId),
		select: ({ data }) => data,
		enabled: !!genreId
	})

	const queryClient = useQueryClient()

	const { mutateAsync: updateAsync } = useMutation({
		mutationKey: ['update genre'],
		mutationFn: (data: IGenreEditInput) => genreService.update(genreId, data),
		onSuccess: () => {
			toast.success('Жанр успешно обновлен')
			queryClient.invalidateQueries({
				queryKey: ['get genres for admin dashboard']
			})
		},
		onError: () => {
			toast.error('Ошибка при обновлении жанра')
		}
	})

	const onSubmit: SubmitHandler<IGenreEditInput> = async data => {
		await updateAsync(data)
	}

	return { genre, onSubmit, isLoading }
}
