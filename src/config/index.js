const appId = "c1cf656a9e1e4c79971ca01e915da6d9";

const urlToGetAuthToken =
  "https://oauth.yandex.ru/authorize?response_type=token&client_id=" + appId;

const paths = {
  root: "/",
  login: "/login",
  explorer: "/explorer"
};

export { urlToGetAuthToken, paths };
