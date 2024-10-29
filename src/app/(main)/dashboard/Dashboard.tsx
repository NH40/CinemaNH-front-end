'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import formStyles from '@/assets/styles/manage/AdminFormEdit.module.scss'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Heading from '@/components/ui/heading/Heading'

import { PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { IUserEditInput, UserRole } from '@/types/user.types'

import { useUserEdit } from '../manage/users/[id]/useUserEdit'

import styles from './Dahboard.module.scss'
import { removeFromStorage } from '@/service/auth/auth-token.service'

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

const Dashboard: FC = () => {
	const { user: profile } = useProfile()

	const { user, onSubmit, isLoading } = useUserEdit(profile?.id || '')

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

	const { push } = useRouter()

	if (!user) return <div>Ошибка тут</div>

	const logout = () => {
		removeFromStorage()
		push(PUBLIC_URL.auth())
	}

	return (
		<div className='px-6'>
			<div className={styles.wrapper}>
				<Heading className={styles.heading}>Привет, {user.name}</Heading>
				<div className='px-6'>
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
				<Button
					className={styles.button}
					variant='outline'
					onClick={() => logout()}
				>
					Выйти
				</Button>
			</div>
		</div>
	)
}

export default Dashboard
