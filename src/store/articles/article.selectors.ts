import {createSelector} from "@ngrx/store";
import {AppState} from "@store/app.state";
import {ArticleState} from "@store/articles/article.reducer";

export const selectArticles = (state: AppState) => state.articles;

export const selectAllArticles = createSelector(
  selectArticles,
  (state:ArticleState) => state.articles
)
