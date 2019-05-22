import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import Spinner from "../Spinner";
import DiscItem from "../DiscItem";
import { requestDiscInfo } from "../../actions";
import { paths } from "../../config";

const Explorer = props => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        {props.discItems && !props.isLoading ? (
          props.discItems.map(item => (
            <DiscItem
              type={item.type === "dir" ? "dir" : "file"}
              name={item.name}
              size={item.size ? (item.size / 1024).toFixed() : ""}
              click={
                item.type === "dir"
                  ? () => props.history.push(`${paths.explorer}/${item.path}`)
                  : () => void {}
              }
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  </div>
);

const connectEnhancer = connect(
  state => ({
    discItems: state.disc.items,
    isLoading: state.disc.isLoading,
    token: state.user.token
  }),
  { requestDiscInfo }
);

const lifecycleEnhancer = lifecycle({
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // disc path excluding app path
      const discLocationPath =
        this.props.location.pathname.slice(15) || paths.root;

      this.props.requestDiscInfo(this.props.token, discLocationPath);
    }
  }
});

export default compose(
  connectEnhancer,
  lifecycleEnhancer
)(Explorer);
