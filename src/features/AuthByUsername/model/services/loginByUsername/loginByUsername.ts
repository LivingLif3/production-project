import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider'

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async ({ username, password }, {dispatch, extra, rejectWithValue}) => {
        console.log(username, password)
        try {
            const response = await extra.api.post<User>('/login', {
                username,
                password
            })

            if(!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"))
        }
    }
)
