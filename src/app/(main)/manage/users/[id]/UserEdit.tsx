'use client'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import formStyles from '@/assets/styles/manage/AdminFormEdit.module.scss'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import Select from '@/components/ui/form-elements/select/Select'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Heading from '@/components/ui/heading/Heading'

import { IUserEditInput, UserRole } from '@/types/user.types'

import { useUserEdit } from './useUserEdit'

interface IUserEdit {
	userId: string
}

const roles = [
	{
		label: 'Пользователь',
		value: UserRole.USER
	},
	{
		label: 'Админ',
		value: UserRole.ADMIN
	}
]

const UserEdit: FC<IUserEdit> = ({ userId }) => {
	const { user, onSubmit, isLoading } = useUserEdit(userId)

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<IUserEditInput>({
		mode: 'onChange',
		values: {
			name: user?.name || '',
			email: user?.email || '',
			role: user?.role || UserRole.USER,
			avatarPath: user?.avatarPath || ''
		}
	})

	return (
		<div className='px-6'>
			<Heading>Настройка пользователя</Heading>
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
									required: 'Имя обязательно'
								})}
								placeholder='Имя'
								error={errors.name}
							/>

							<Field
								{...register('email', {
									required: 'Почта обязательна'
								})}
								placeholder='Почта'
								error={errors.email}
							/>

							<Controller
								name='role'
								control={control}
								rules={{
									required: 'Пожалуйста выберете роль'
								}}
								render={({ field, fieldState: { error } }) => (
									<Select
										error={error}
										field={field}
										placeholder='Роль'
										options={roles || []}
										// isMulti={false}
									/>
								)}
							/>

							<Controller
								name='avatarPath'
								control={control}
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error }
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='users'
										placeholder='Аватар'
									/>
								)}
								rules={{
									required: 'Аватар обязателен'
								}}
							/>
						</div>

						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	)
}

export default UserEdit
