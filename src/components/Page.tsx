import React, { ReactNode } from 'react'
import { useSafeArea } from 'react-native-safe-area-context'
import {
	View,
	ViewStyle,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native'
import { empty } from '../utils/empty'

export default function Page({
	children,
	style = empty.object,
}: {
	children: ReactNode
	style?: ViewStyle
}) {
	const { bottom, top } = useSafeArea()

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View
				// centerContent
				style={[
					styles.container,
					{ paddingBottom: bottom, paddingTop: top, ...style },
				]}
			>
				{children}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 8,
	},
})
