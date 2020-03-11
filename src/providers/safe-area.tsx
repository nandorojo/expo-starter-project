import React, { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function SafeProvider({ children }: { children: ReactNode }) {
	return <SafeAreaProvider>{children}</SafeAreaProvider>
}
