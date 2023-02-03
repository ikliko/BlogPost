import {Injectable} from "@angular/core";
import {AppState} from "@store/app.state";
import {ArticleService} from "../../services/article.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {loadArticles, loadArticlesFailure, loadArticlesSuccess} from "@store/articles/article.actions";
import {catchError, from, map, of, switchMap} from "rxjs";

@Injectable()
export class ArticleEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private articleService: ArticleService
  ) {
    let loadArticles$ = createEffect(
      () => this.actions$.pipe(
        ofType(loadArticles),
        switchMap(() =>
          from(
            this.articleService.getAll()).pipe(
            map(articles => loadArticlesSuccess({articles})),
            catchError(error => of(loadArticlesFailure({error})))
          )
        )
      )
    )
  }
}
