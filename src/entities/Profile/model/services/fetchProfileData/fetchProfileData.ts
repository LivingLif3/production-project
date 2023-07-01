import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, {dispatch, extra, rejectWithValue}) => {
        try {
            const response = await extra.api.get<Profile>('/profile')

            if(!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"))
        }
    }
)
