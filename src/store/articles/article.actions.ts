import {createAction, props} from "@ngrx/store";
import {Article} from "@store/articles/article";

export const addArticle = createAction(
  '[ARTICLES] Add article',
  props<{ payload: {
      title: string;
      body: string;
      userId: number;
    } }>()
)

export const removeArticle = createAction(
  '[ARTICLES] Remove article',
  props<{ id: number }>()
)

export const loadArticles = createAction(
  '[ARTICLES] Load all article',
)

export const loadArticlesSuccess = createAction(
  '[ARTICLES] Load all articles success',
  props<{ articles: Article[] }>()
)

export const loadArticlesFailure = createAction(
  '[ARTICLES] Load all articles failure',
  props<{ error: string }>()
)
