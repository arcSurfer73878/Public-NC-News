import axios from "axios";

const API_URL = "https://nc-news-kaiming.herokuapp.com/api";

export const getUsers = () => {
  return axios.get(`${API_URL}/users`).then(({ data }) => data.users);
};

export const getTopics = () => {
  return axios.get(`${API_URL}/topics`).then(({ data }) => data.topics);
};

export const getArticles = topic => {
  const url = topic
    ? `${API_URL}/topics/${topic}/articles`
    : `${API_URL}/articles`;
  return axios.get(url).then(({ data }) => data.articles);
};
export const getComments = async id => {
  return axios
    .get(`${API_URL}/articles/${id}/comments`)
    .then(({ data }) => data.comments);
};
export const postComment = async (id, body, created_by) => {
  return axios
    .post(`${API_URL}/articles/${id}/comments`, { created_by, body })
    .then(({ data }) => data.comment);
};
export const postArticle = async (title, belongs_to, body, user) => {
  console.log(title);
  console.log(belongs_to);
  console.log(body);
  console.log(user);
  return axios
    .post(`${API_URL}/topics/${belongs_to}/articles`, {
      title: title,
      body: body,
      created_by: user
    })
    .then(({ data }) => data.articles);
};
export const deleteComment = async (id, comment) => {
  return axios
    .delete(`${API_URL}/comments/${id}`, { comment })
    .then(({ data }) => data.comments);
};
export const getArticle = id => {
  return axios
    .get(`${API_URL}/articles/${id}`)
    .then(({ data }) => data.article);
};
export const vote = (id, direction) => {
  return axios
    .patch(`${API_URL}/articles/${id}?vote=${direction}`)
    .then(({ data }) => data.article);
};
export const getUser = async username => {
  return axios
    .get(`${API_URL}/users/${username}`)
    .then(({ data }) => data.user);
};
