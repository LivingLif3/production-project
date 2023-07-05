import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article, ArticleBlockType, ArticleType } from '../../model/types/article'

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
    views: 1022,
    createdAt: '02.07.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Принято в мире IT начинать изучение чего либо с "hello world" приложения.',
                'Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно.'
            ]
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: 'const { createProxyMiddleware } = require(\'http-proxy-middleware\');\n\nmodule.exports = createProxyMiddleware(\'/products\', {\n    target: \'https://fakestoreapi.com\',\n    secure: false, \n    changeOrigin: true\n});'
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Принято в мире IT начинать изучение чего либо с "hello world" приложения.',
                'Это довольно таки хорошая практика. Самое сложное, в изучении чего либо - начать, а начинать с чего то супер простого - не так сложно.'
            ]
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
            title: 'Заголовок этого блока'
        }
    ]
}

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
        isLoading: false
    },
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true
    },
})]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: false,
        error: 'error'
    },
})]
