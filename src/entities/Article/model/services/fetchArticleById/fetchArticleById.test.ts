import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticleById } from './fetchArticleById'
import { ArticleType } from 'entities/Article/model/types/article'

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

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('find not existed article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }))
        const result = await thunk.callThunk("321313")

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.payload).toEqual("Статья не найдена")
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk("1")

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
