import { DeepPartial } from '@reduxjs/toolkit'
import {
    articleDetailsActions,
    articleDetailsReducer,
    Article,
    ArticleDetailsSchema,
    getArticleDetailsData,
    getArticleDetailsError
} from 'entities/Article'
import { ArticleBlock, ArticleType } from 'entities/Article/model/types/article'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'


const data = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    views: 1022,
    createdAt: "02.07.2023",
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "Принято в мире IT начинать изучение чего либо с \"hello world\" приложения.",
                "Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно."
            ]
        },
        {
            id: "4",
            type: "CODE",
            code: "const { createProxyMiddleware } = require('http-proxy-middleware');\n\nmodule.exports = createProxyMiddleware('/products', {\n    target: 'https://fakestoreapi.com',\n    secure: false, \n    changeOrigin: true\n});"
        },
        {
            id: "5",
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "Принято в мире IT начинать изучение чего либо с \"hello world\" приложения.",
                "Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно."
            ]
        },
        {
            id: "2",
            type: "IMAGE",
            src: "https://hsto.org/r/w1560/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png",
            title: "Заголовок этого блока"
        }
    ]
}

describe('articleSlice.test', () => {
    test('test fetchById article pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false
        }
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile fullfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: {
                id: "1",
                title: "title",
                subtitle: "subtitle",
                img: "saffasfasfa",
                views: 1022,
                createdAt: '04.07.2023',
                type: [ArticleType.IT],
                blocks: []
            }
        }

        let data = {
            id: "1",
            title: "title",
            subtitle: "subtitle",
            img: "saffasfasfa",
            views: 1022,
            createdAt: '04.07.2023',
            type: [ArticleType.IT],
            blocks: []
        }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data,'', '')
        )).toEqual({
            isLoading: false,
            data
        })
    })
})
