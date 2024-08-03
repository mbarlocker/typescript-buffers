import iplib from './ip.js'
import { assert, describe, expect, it } from 'vitest'

describe('IP Address', () => {
	it('Handles IPv4 strings', () => {
		const ip = '1.2.3.4'
		const arr = [1, 2, 3, 4]

		assert.equal(ip, iplib.asString(ip))
		assert.equal(ip, iplib.asString(Buffer.from(arr)))
		assert.equal(ip, iplib.asString(new iplib.library.IPv4(arr)))
		assert.equal(null, iplib.asStringNullable(null))

		assert.notEqual(ip, iplib.asString('4.3.2.1'))
		assert.notEqual(ip, iplib.asString(Buffer.from([4, 3, 2, 1])))
		assert.notEqual(ip, iplib.asString(new iplib.library.IPv4([4, 3, 2, 1])))
	})

	it('Handles IPv4 buffers', () => {
		const ip = '2.3.4.5'
		const arr = [2, 3, 4, 5]
		const buffer = Buffer.from(arr)

		assert.isTrue(buffer.equals(iplib.asBuffer(ip)))
		assert.isTrue(buffer.equals(iplib.asBuffer(Buffer.from(arr))))
		assert.isTrue(buffer.equals(iplib.asBuffer(new iplib.library.IPv4(arr))))
		assert.equal(null, iplib.asBufferNullable(null))

		assert.isFalse(buffer.equals(iplib.asBuffer('2.2.2.2')))
		assert.isFalse(buffer.equals(iplib.asBuffer(Buffer.from([2, 2, 2, 2]))))
		assert.isFalse(buffer.equals(iplib.asBuffer(new iplib.library.IPv4(Buffer.from([2, 2, 2, 2])))))
	})

	it('Handles Equality', () => {
		assert.isTrue(iplib.equals('3.3.3.3', '3.3.3.3'))
		assert.isTrue(iplib.equals('3.3.3.3', Buffer.from([3, 3, 3, 3])))
		assert.isTrue(iplib.equals('3.3.3.3', new iplib.library.IPv4([3, 3, 3, 3])))

		assert.isFalse(iplib.equals('3.3.3.3', '3.3.3.5'))
		assert.isFalse(iplib.equals('3.3.3.3', Buffer.from([3, 3, 3, 5])))
		assert.isFalse(iplib.equals('3.3.3.3', new iplib.library.IPv4([3, 3, 3, 5])))
	})

	it('Returns null appropriately', () => {
		assert.equal(null, iplib.asStringNullable(null))
		assert.equal(null, iplib.asBufferNullable(null))
		assert.equal(null, iplib.asClassNullable(null))
		assert.equal(null, iplib.stringToBufferNullable(null))
		assert.equal(null, iplib.stringToClassNullable(null))
		assert.equal(null, iplib.bufferToClassNullable(null))
		assert.equal(null, iplib.bufferToStringNullable(null))
		assert.equal(null, iplib.classToBufferNullable(null))
		assert.equal(null, iplib.classToStringNullable(null))
	})
})
