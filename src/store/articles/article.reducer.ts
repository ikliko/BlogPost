import {Article} from "@store/articles/article";
import {createReducer, on} from "@ngrx/store";
import {
  addArticle,
  loadArticles,
  loadArticlesFailure,
  loadArticlesSuccess,
  removeArticle
} from "@store/articles/article.actions";


export interface ArticleState {
  articles: Article[];
  selectedArticle: Article | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

const initialState: ArticleState = {
  articles: [],
  selectedArticle: null,
  error: null,
  status: 'pending'
}

export const articleReducer = createReducer(
  initialState,

  on(addArticle, (state, {payload: {title, body, userId}}) => ({
    ...state,
    articles: [...state.articles, {
      id: state.articles.length + 1,
      title,
      body,
      userId,
    }]
  })),

  on(removeArticle, (state, {id}) => ({
    ...state,
    articles: state.articles.filter(article => article.id !== id)
  })),

  on(loadArticles, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(loadArticlesFailure, (state, {error}) => ({
    ...state,
    error,
    status: 'error',
  })),

  on(loadArticlesSuccess, (state, {articles}) => ({
    ...state,
    articles,
    error: null,
    status: 'success',
  })),
)

