import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: 'error'
            }
        }
        expect(getLoginError(state)).toEqual('error')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state)).toEqual(undefined)
    })
})
