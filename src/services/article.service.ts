import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Article} from "@store/articles/article";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(protected httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Article[]>(`${environment.API_ENDPOINT}/posts`);
  }
}
