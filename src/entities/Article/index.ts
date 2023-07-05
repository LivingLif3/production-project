export {
    ArticleDetails
} from "./ui/ArticleDetails/ArticleDetails"

export {
    articleDetailsActions,
    articleDetailsReducer
} from "./model/slice/articleDetailsSlice"

export type {
    Article,
} from './model/types/article'

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError
} from './model/selectors/articleDetails'

export type {
    ArticleDetailsSchema,
} from './model/types/articleDetailsSchema'
