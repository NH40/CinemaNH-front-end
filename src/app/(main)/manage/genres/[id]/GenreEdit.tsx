'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import formStyles from '@/assets/styles/manage/AdminFormEdit.module.scss'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import SlugField from '@/components/ui/form-elements/slug-field/SlugField'
import Heading from '@/components/ui/heading/Heading'

import { IGenreEditInput } from '@/types/genre.types'

import generateSlug from '@/utils/string/generateSlug'

import { useGenreEdit } from './useGenreEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/text-editor/TextEditor'),
	{
		ssr: false
	}
)

interface IGenreEdit {
	genreId: string
}

const GenreEdit: FC<IGenreEdit> = ({ genreId }) => {
	const { genre, onSubmit, isLoading } = useGenreEdit(genreId)

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
		values: {
			name: genre?.name || '',
			slug: genre?.slug || '',
			description: genre?.description || '',
			icon: genre?.icon! || ''
		}
	})

	return (
		<div className='px-6'>
			<Heading>Редактирование жанра</Heading>
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<div className='space-y-4'>
						{Array.from({ length: 3 }).map((_, index) => (
							<SkeletonLoader className='h-10' key={index} />
						))}
					</div>
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Название обязательно'
								})}
								placeholder='Название'
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Иконка обязательна'
								})}
								placeholder='Иконка'
								error={errors.name}
								style={{ width: '31%' }}
							/>
						</div>

						<Controller
							name='description'
							control={control}
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<DynamicTextEditor
									placeholder='Описание'
									onChange={onChange}
									error={error}
									value={value}
								/>
							)}
						/>
						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	)
}

export default GenreEdit
