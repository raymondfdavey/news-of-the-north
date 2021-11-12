import axios from "axios";
const commonStart = "https://news-of-the-north-server.herokuapp.com/api/";

export const fetchCommentsById = id => {
  axios
    .get(
      "https://news-of-the-north-server.herokuapp.com/articles/" +
        id +
        "/comments?sort_by=created_at"
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const fetchArticleById = article_id => {
  axios
    .get("https://news-of-the-north-server.herokuapp.com/articles/" + article_id)
    .then(({ data: { article } }) => article);
};

export const fetchAllArticles = (sortBy, orderBy) => {
  return axios
    .get(
      "https://news-of-the-north-server.herokuapp.com/api/articles?sort_by=" +
        sortBy +
        "&order=" +
        orderBy
    )
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticlesByParam = (param, value, sortBy, orderBy) => {
  return axios
    .get(
      "https://news-of-the-north-server.herokuapp.com/api/articles?" +
        param +
        "=" +
        value +
        "&sort_by=" +
        sortBy +
        "&order=" +
        orderBy
    )
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const articleVotePatch = (article_id, vote) => {
  const patchObject = { inc_votes: +vote };

  return axios
    .patch(`${commonStart}articles/${article_id}`, patchObject)
    .then(({ data: { article } }) => article)
    .catch(err => console.dir(err));
};

export const commentVotePatch = (comment_id, vote) => {
  const patchObject = { inc_votes: +vote };

  return axios
    .patch(`${commonStart}comments/${comment_id}`, patchObject)
    .then(({ data: { article } }) => article)
    .catch(err => console.dir(err));
};

export const postCommentToDatabase = (article_id, input, username) => {
  console.log(article_id, input, username);

  const patchObject = {
    username: username,
    body: input
  };
  return axios
    .post(`${commonStart}articles/${article_id}/comments`, patchObject)
    .catch(err => console.dir(err));
};

export const deleteCommentFromDatabase = comment_id => {
  return axios
    .delete(`${commonStart}comments/${comment_id}`)
    .catch(err => console.dir(err));
};

export const fetchAllTopics = () => {
  return axios
    .get("https://news-of-the-north-server.herokuapp.com/topics/")
    .then(({ data: { topics } }) => topics);
};
