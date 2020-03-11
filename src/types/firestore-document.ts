export type FirestoreDocument<T> = T & {
	id: string
	exists?: boolean
}
