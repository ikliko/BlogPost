import {Component, OnInit} from '@angular/core';
import {PageTitleDecorator} from "@libs/page-title/page-title.decorator";
import {ArticleService} from "../../../../../services/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
@PageTitleDecorator('Article | Blog')
export class ArticleListComponent implements OnInit {
  constructor(protected articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAll().subscribe(data => {
      console.log(data)
    })
  }
}
