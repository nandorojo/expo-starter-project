import React, { ReactNode } from 'react'
import SafeProvider from './safe-area'

export default function Providers({ children }: { children: ReactNode }) {
	return <SafeProvider>{children}</SafeProvider>
}
