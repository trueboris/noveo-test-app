import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, lifecycle } from "recompose";
import { setToken, setTokenError, requestDiscInfo } from "../../actions";
import { paths } from "../../config";

const Login = props => (
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

const connectEnhancer = connect(
  state => ({ token: state.user.token }),
  { setToken, setTokenError, requestDiscInfo }
);

const lifecycleEnhancer = lifecycle({
  componentDidMount() {
    try {
      const tokenData = /access_token=([^&]+)/.exec(document.location.hash);

      const token = tokenData ? tokenData[1] : null;

      if (token) {
        this.props.setToken(token);

        this.props.requestDiscInfo(token);

        this.props.history.push(paths.explorer);
      }
    } catch (error) {
      this.props.setTokenError(error);
    }
  }
});

export default compose(
  withRouter,
  connectEnhancer,
  lifecycleEnhancer
)(Login);
