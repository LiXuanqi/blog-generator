const GITHUB_USER_NAME = "LiXuanqi";
const REPOSITORY_NAME = "blog";
const GITHUB_CLIENT_ID = "ecbe73e498e676275a41";
const GITHUB_CLIENT_SECRET = "517a5fdb49a810b9b4873b43a6bbcf132608c598";

const GITHUB_API = "https://api.github.com";
const GITHUB_GET_ISSUES_API = `${GITHUB_API}/repos/${GITHUB_USER_NAME}/${REPOSITORY_NAME}/issues`;
const GITHUB_MARKDOWN_RENDER_API = `${GITHUB_API}/markdown`;
const GITHUB_GET_LABELS_API = `${GITHUB_API}/repos/${GITHUB_USER_NAME}/${REPOSITORY_NAME}/labels`;

const GITHUB_GET_USER_INFO_API = 'https://api.github.com/user';

const GITHUB_OAUTH_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_OAUTH_GET_ACCESS_TOKEN_URL = "https://auth.baixiaotu.cc";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"
const GITHUB_ACCESS_TOKEN = "648994145002776d350f246a622023eeaaf52e88";

const POST_COVER_PICS = {
  default: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
  algorithm: [
    "assets/algorithm-1.png",
    "assets/algorithm-2.png"
  ]
}


const UNSPLASH_API = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY = "93fc141a31cdd449eefd35f3c9038d002391f3e5c97b54b18366d9399f1fc3e7";
export {
  GITHUB_USER_NAME,
  REPOSITORY_NAME,
  GITHUB_GET_ISSUES_API,
  GITHUB_MARKDOWN_RENDER_API,
  GITHUB_GET_LABELS_API,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_OAUTH_AUTHORIZE_URL,
  GITHUB_OAUTH_GET_ACCESS_TOKEN_URL,
  GITHUB_GET_USER_INFO_API,
  POST_COVER_PICS,
  UNSPLASH_API,
  UNSPLASH_ACCESS_KEY,
  GITHUB_GRAPHQL_URL,
  GITHUB_ACCESS_TOKEN
}