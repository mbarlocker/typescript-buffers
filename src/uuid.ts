import * as library from 'uuid'

type InputBuffer = ArrayLike<number>

export type Representation =
	| string
	| Buffer

export const stringToBuffer = (value: string): Buffer => {
	return Buffer.from(value.replace(/-/g, ''), 'hex')
}

export const stringToBufferNullable = (value: string | null): Buffer | null => {
	if (value === null) { return null }
	return stringToBuffer(value)
}

export const bufferToString = (value: Buffer): string => {
	const str = value.toString('hex')

	return [
		str.slice( 0,  8),
		str.slice( 8, 12),
		str.slice(12, 16),
		str.slice(16, 20),
		str.slice(20, 32),
	].join('-')
}

export const bufferToStringNullable = (value: Buffer | null): string | null => {
	if (value === null) { return null }
	return bufferToString(value)
}

export const asString = (value: Representation): string => {
	if (typeof value === 'string') {
		return value
	}

	return bufferToString(value)
}

export const asStringNullable = (value: Representation | null): string | null => {
	if (value === null) { return null }
	return asString(value)
}

export const asBuffer = (value: Representation): Buffer => {
	if (typeof value === 'string') {
		return stringToBuffer(value)
	}

	return value
}

export const asBufferNullable = (value: Representation | null): Buffer | null => {
	if (value === null) { return null }
	return asBuffer(value)
}

export const normalize = (value: Representation): string => {
	return asString(value).toLowerCase()
}

export const normalizeNullable = (value: Representation | null): string | null => {
	if (value === null) { return null }
	return normalize(value)
}

export const equals = (value1: Representation | null, value2: Representation | null): boolean => {
	return normalizeNullable(value1) === normalizeNullable(value2)
}

export const v1Buffer = (options?: library.V1Options): Buffer => {
	return stringToBuffer(library.v1(options))
}

export const v3Buffer = (name: string | InputBuffer, namespace: string | InputBuffer): Buffer => {
	return stringToBuffer(library.v3(name, namespace))
}

export const v4Buffer = (options?: library.V4Options): Buffer => {
	return stringToBuffer(library.v4(options))
}

export const v5Buffer = (name: string | InputBuffer, namespace: string | InputBuffer): Buffer => {
	return stringToBuffer(library.v5(name, namespace))
}

export const v6Buffer = (options?: library.V6Options): Buffer => {
	return stringToBuffer(library.v6(options))
}

export const v7Buffer = (options?: library.V7Options): Buffer => {
	return stringToBuffer(library.v7(options))
}

export default {
	asBuffer,
	asBufferNullable,
	asString,
	asStringNullable,
	bufferToString,
	bufferToStringNullable,
	equals,
	library,
	normalize,
	normalizeNullable,
	stringToBuffer,
	stringToBufferNullable,
	v1Buffer,
	v3Buffer,
	v4Buffer,
	v5Buffer,
	v6Buffer,
	v7Buffer,
}
