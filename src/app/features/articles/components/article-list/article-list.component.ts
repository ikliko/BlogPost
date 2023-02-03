import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageTitleDecorator} from "@libs/page-title/page-title.decorator";
import {Store} from "@ngrx/store";
import {ArticleService} from "../../../../../services/article.service";
import {Subject, takeUntil} from "rxjs";
import {Article} from "@store/articles/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
@PageTitleDecorator('Article | Blog')
export class ArticleListComponent implements OnInit, OnDestroy {
  public articles: Article[] = [];
  public articles$ = this.articleService.getAll();
  protected destroy$ = new Subject<void>();

  constructor(protected store: Store,
              protected articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.articles = data;
      })
    // this.store.dispatch(loadArticles());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
