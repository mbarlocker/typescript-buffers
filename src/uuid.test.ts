import uuidlib from './uuid.js'
import { assert, describe, expect, it } from 'vitest'

describe('UUID', () => {
	it('Handles strings', () => {
		const str = '12341234-1234-1234-1234-123412341234'
		const buffer = Buffer.from([18, 52, 18, 52, 18, 52, 18, 52, 18, 52, 18, 52, 18, 52, 18, 52])

		assert.equal(str, uuidlib.asString(str))
		assert.equal(str, uuidlib.asString(buffer))
		assert.equal(str, uuidlib.asString(uuidlib.asBuffer(str)))

		assert.notEqual(str, '43214321-4321-4321-4321-432143214321')
	})

	it('Returns nulls', () => {
		assert.equal(null, uuidlib.asStringNullable(null))
		assert.equal(null, uuidlib.asBufferNullable(null))
		assert.equal(null, uuidlib.stringToBufferNullable(null))
		assert.equal(null, uuidlib.bufferToStringNullable(null))
	})

	it('Generates buffers', () => {
		assert.isTrue(uuidlib.v1Buffer().length === 16)
		assert.isTrue(uuidlib.v3Buffer('asdf', '1b671a64-40d5-491e-99b0-da01ff1f3341').length === 16)
		assert.isTrue(uuidlib.v4Buffer().length === 16)
		assert.isTrue(uuidlib.v5Buffer('asdf', '1b671a64-40d5-491e-99b0-da01ff1f3341').length === 16)
		assert.isTrue(uuidlib.v6Buffer().length === 16)
	})
})
