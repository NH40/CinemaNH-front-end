import { IUser } from './user.types'

export interface IPaymentAmount {
	value: string
	currency: string
}

export interface IPaymentRecipient {
	account_id: string
	gateway_id: string
}

export interface IPaymentMethod {
	type: string
	id: string
	saved: boolean
}

export interface IPaymentConfirmation {
	type: string
	return_url: string
	confirmation_url: string
}
export interface IPaymentResponse {
	id: string
	status: string
	amount: IPaymentAmount
	recipient: IPaymentRecipient
	payment_method: IPaymentMethod
	created_at: Date
	confirmation: IPaymentConfirmation
}

export enum PaymentStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED'
}

export interface IPayment {
	id: string
	createdAt: string
	status: PaymentStatus
	user: IUser
	amount: number
}
