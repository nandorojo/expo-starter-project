import React from 'react'
import Providers from './providers'
import { enableScreens } from 'react-native-screens'
import Navigation from './navigation'

enableScreens()

export default function App() {
	return (
		<Providers>
			<Navigation />
		</Providers>
	)
}
