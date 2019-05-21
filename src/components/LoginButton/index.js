import React from "react";
import { urlToGetAuthToken } from "../../config";

const LoginButton = props => (
  <a className="btn btn-primary" href={urlToGetAuthToken} role="button">
    Login
  </a>
);

export default LoginButton;
