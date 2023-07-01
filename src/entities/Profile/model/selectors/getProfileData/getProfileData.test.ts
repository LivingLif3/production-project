import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.test', () => {
    test('should return error', () => {

        const data = {
            username: 'admin',
            age: 22,
            country: Country.Belarus,
            lastname: 'Letko',
            first: 'Sasha',
            city: 'asf',
            currency: Currency.BYN,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }

        expect(getProfileData(state as StateSchema)).toEqual(data)
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    });
})
