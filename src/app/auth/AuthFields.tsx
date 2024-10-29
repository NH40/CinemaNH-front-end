import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/field/Field'

import { IAuthForm } from '@/types/auth.types'

import { validEmail } from '../../utils/auth/valid-email'

interface IAuthFields {
	register: UseFormRegister<IAuthForm>
	errors: {
		name?: FieldError
		email?: FieldError
		password?: FieldError
	}
	isLoginForm: boolean
}

const AuthFields: FC<IAuthFields> = ({ register, errors, isLoginForm }) => {
	return (
		<>
			{!isLoginForm && (
				<Field
					{...register('name', {
						required: 'Имя это обезтельное поле',
						minLength: {
							value: 2,
							message: 'Имя слишком короткое'
						}
					})}
					placeholder='Имя'
					error={errors.name}
				/>
			)}
			<Field
				{...register('email', {
					required: 'email это обезтельное поле',
					pattern: {
						value: validEmail,
						message: 'Введите корректный email'
					}
				})}
				placeholder='Email'
				error={errors.email}
			/>
			<Field
				{...register('password', {
					required: 'Пароль это обезтельное поле',
					minLength: {
						value: 6,
						message: 'Пароль должен содержать не менее 6 символов'
					}
				})}
				placeholder='Пароль'
				error={errors.password}
				type='password'
			/>
		</>
	)
}

export default AuthFields
