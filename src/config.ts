const GITHUB_USER_NAME = "LiXuanqi";
const REPOSITORY_NAME = "blog";

const GITHUB_API = "https://api.github.com";
const GITHUB_GET_ISSUES_API = `${GITHUB_API}/repos/${GITHUB_USER_NAME}/${REPOSITORY_NAME}/issues`;
const GITHUB_MARKDOWN_RENDER_API = `${GITHUB_API}/markdown/raw`;

export {
  GITHUB_GET_ISSUES_API,
  GITHUB_MARKDOWN_RENDER_API
}