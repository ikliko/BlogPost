import {Article} from "@store/articles/article";
import * as rootReducer from "@store/root.reducer";
import {ArticleActions, GET_ALL_ARTICLES} from "@store/articles/article.actions";


export interface ArticleState {
  articles: Article[];
  selectedArticle: Article | null;
}

export interface State extends rootReducer.State {
  articles: ArticleState;
}

const initialState: ArticleState = {
  articles: [],
  selectedArticle: null
}

export const articleReducer = (state = initialState, action: ArticleActions) => {
  switch (action.type) {
    case GET_ALL_ARTICLES: {
      return {
        ...state,
        articles: action.payload
      }
    }

    default: {
      return state
    }
  }
}
