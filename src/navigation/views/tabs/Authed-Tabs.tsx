import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Paragraph } from '../../../components/Text/index'
import HelloWorld from '../../../views/Hello-World'

export type AuthedTabsParams = {
	'Hello World': undefined
}

const Tab = createBottomTabNavigator<AuthedTabsParams>()

export default function AuthedTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				options={{
					tabBarIcon: function Icon() {
						return <Paragraph>👨‍👨‍👦</Paragraph>
					},
				}}
				name="Hello World"
				component={HelloWorld}
			/>
		</Tab.Navigator>
	)
}
