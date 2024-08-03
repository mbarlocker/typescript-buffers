import library from 'ipaddr.js'

export type IP =
	| library.IPv4
	| library.IPv6

export type Representation =
	| string
	| Buffer
	| IP

export const stringToBuffer = (value: string): Buffer => {
	return classToBuffer(stringToClass(value))
}

export const stringToBufferNullable = (value: string | null): Buffer | null => {
	if (value === null) { return null }
	return stringToBuffer(value)
}

export const stringToClass = (value: string): IP => {
	return library.parse(value)
}

export const stringToClassNullable = (value: string | null): IP | null => {
	if (value === null) { return null }
	return stringToClass(value)
}

export const bufferToClass = (value: Buffer): IP => {
	return library.fromByteArray(Array.prototype.slice.call(value))
}

export const bufferToClassNullable = (value: Buffer | null): IP | null => {
	if (value === null) { return null }
	return bufferToClass(value)
}

export const bufferToString = (value: Buffer): string => {
	return classToString(bufferToClass(value))
}

export const bufferToStringNullable = (value: Buffer | null): string | null => {
	if (value === null) { return null }
	return bufferToString(value)
}

export const classToBuffer = (value: IP): Buffer => {
	return Buffer.from(value.toByteArray())
}

export const classToBufferNullable = (value: IP | null): Buffer | null => {
	if (value === null) { return null }
	return classToBuffer(value)
}

export const classToString = (value: IP): string => {
	return value.toString()
}

export const classToStringNullable = (value: IP | null): string | null => {
	if (value === null) { return null }
	return classToString(value)
}

export const asString = (value: Representation): string => {
	if (typeof value === 'string') {
		return value
	}

	if (Buffer.isBuffer(value)) {
		return bufferToString(value)
	}

	return classToString(value)
}

export const asStringNullable = (value: Representation | null): string | null => {
	if (value === null) { return null }
	return asString(value)
}

export const asBuffer = (value: Representation): Buffer => {
	if (typeof value === 'string') {
		return stringToBuffer(value)
	}

	if (Buffer.isBuffer(value)) {
		return value
	}

	return classToBuffer(value)
}

export const asBufferNullable = (value: Representation | null): Buffer | null => {
	if (value === null) { return null }
	return asBuffer(value)
}

export const asClass = (value: Representation): IP => {
	if (typeof value === 'string') {
		return stringToClass(value)
	}

	if (Buffer.isBuffer(value)) {
		return bufferToClass(value)
	}

	return value
}

export const asClassNullable = (value: Representation | null): IP | null => {
	if (value === null) { return null }
	return asClass(value)
}

export const normalize = (value: Representation): string => {
	return asClass(value).toNormalizedString()
}

export const normalizeNullable = (value: Representation | null): string | null => {
	if (value === null) { return null }
	return normalize(value)
}

export const equals = (a: Representation | null, b: Representation | null): boolean => {
	return normalizeNullable(a) === normalizeNullable(b)
}

export default {
	asBuffer,
	asBufferNullable,
	asClass,
	asClassNullable,
	asString,
	asStringNullable,
	bufferToClass,
	bufferToClassNullable,
	bufferToString,
	bufferToStringNullable,
	classToBuffer,
	classToBufferNullable,
	classToString,
	classToStringNullable,
	equals,
	library,
	normalize,
	normalizeNullable,
	stringToBuffer,
	stringToBufferNullable,
	stringToClass,
	stringToClassNullable,
}
