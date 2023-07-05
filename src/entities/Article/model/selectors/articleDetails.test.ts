import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article'

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const data = {
            id: "1",
            title: "title",
            subtitle: "subtitle",
            views: 1022,
            createdAt: "03.07.2023",
            type: [ArticleType.IT],
            img: '',
            blocks: []
        }

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
                isLoading: false
            }
        }

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('should return isLoading', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should return error', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: "error",
                isLoading: false
            }
        }

        expect(getArticleDetailsError(state as StateSchema)).toEqual("error")
    })

    test('should work with empty state', async () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})
