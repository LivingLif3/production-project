import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123'
            }
        }

        expect(getProfileError(state as StateSchema)).toEqual('123')
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    });
})
