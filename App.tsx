import { decode, encode } from 'base-64'

// @ts-ignore
if (!global.btoa) {
	// @ts-ignore
	global.btoa = encode
}

// @ts-ignore
if (!global.atob) {
	// @ts-ignore

	global.atob = decode
}

export { default } from './src'
