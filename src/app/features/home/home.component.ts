import {Component, OnInit} from '@angular/core';
import {PageTitleDecorator} from "../../../libs/page-title/page-title.decorator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@PageTitleDecorator('Blog')
export class HomeComponent implements OnInit {
  constructor(protected router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/articles']);
  }
}
