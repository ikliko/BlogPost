import {Action} from "@ngrx/store";
import {Article} from "@store/articles/article";

export const GET_ALL_ARTICLES = '[ARTICLES] Get All';

export class GetAllArticles implements Action {
  readonly type = GET_ALL_ARTICLES;

  constructor(public payload: Article[]) {}
}

export type ArticleActions = GetAllArticles;
