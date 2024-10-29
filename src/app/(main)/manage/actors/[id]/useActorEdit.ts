import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IActorEditInput } from '@/types/actor.types'

import { actorService } from '@/service/actor.service'

export const useActorEdit = (actorId: string) => {
	const { data: actor, isLoading } = useQuery({
		queryKey: ['get actor by id:', actorId],
		queryFn: () => actorService.getById(actorId),
		select: ({ data }) => data,
		enabled: !!actorId
	})

	const queryClient = useQueryClient()

	const { mutateAsync: updateAsync } = useMutation({
		mutationKey: ['update actor'],
		mutationFn: (data: IActorEditInput) => actorService.update(actorId, data),
		onSuccess: () => {
			toast.success('Актер успешно обновлен')
			queryClient.invalidateQueries({
				queryKey: ['get actor for admin dashboard']
			})
		},
		onError: () => {
			toast.error('Ошибка при обновлении жанра')
		}
	})

	const onSubmit: SubmitHandler<IActorEditInput> = async data => {
		await updateAsync(data)
	}

	return { actor, onSubmit, isLoading }
}
