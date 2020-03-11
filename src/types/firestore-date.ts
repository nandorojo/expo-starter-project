export type ServerDate<IsServer = false> = IsServer extends true
	? firebase.firestore.Timestamp
	: Date
