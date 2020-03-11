import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthedTabs from './views/tabs/Authed-Tabs'

export default function Navigation() {
	return (
		<NavigationContainer>
			<AuthedTabs />
		</NavigationContainer>
	)
}
