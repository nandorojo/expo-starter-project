import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Text as RNText, TextStyle, StyleSheet } from 'react-native'

type Props = Omit<ComponentPropsWithoutRef<typeof RNText>, 'style'> & {
	style?: TextStyle
	children: ReactNode
}

export const H1 = React.forwardRef<RNText, Props>(function H1(props, ref) {
	const { style, children, ...p } = props
	return (
		<RNText {...p} style={[styles.h1, style]} ref={ref}>
			{children}
		</RNText>
	)
})

export const Paragraph = React.forwardRef<RNText, Props>(function Paragraph(
	props,
	ref
) {
	const { style, children, ...p } = props
	return (
		<RNText {...p} style={[styles.paragraph, style]} ref={ref}>
			{children}
		</RNText>
	)
})

export const Text = {
	H1,
	Paragraph,
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 32,
		fontWeight: '500',
		marginBottom: 12,
	},
	paragraph: {
		fontSize: 18,
		marginBottom: 8,
	},
})
