import axios from "axios";

const makeRequest = (url, params = {}) => axios.get(url, params);

const countFilesLimit = 500;

const makeDiscInfoRequest = ({ token, path = "/" }) =>
  makeRequest(
    `https://cloud-api.yandex.net/v1/disk/resources?path=${encodeURIComponent(
      path
    )}&limit=${countFilesLimit}`,
    {
      headers: { Authorization: `OAuth ${token}` }
    }
  );

export { makeDiscInfoRequest };
