import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};
export default articleReducer;
