import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {Comment} from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, {dispatch, extra, rejectWithValue}) => {
        if(!articleId) {
            return rejectWithValue('error')
        }
        try {
            const response = await extra.api.get<Comment[]>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            if(!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue(i18n.t("Error"))
        }
    }
)
