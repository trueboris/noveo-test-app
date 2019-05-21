import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { requestDiscInfo } from "../../actions";
import { paths } from "../../config";

const classNamesForItemIcons = {
  file: "fas fa-file",
  dir: "fas fa-folder"
};

const classNamesForItemNames = {
  file: "btn disabled text-left",
  dir: "btn btn-link text-left"
};

const Explorer = props => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        {props.discItems && !props.isLoading ? (
          props.discItems.map((item, index) => {
            const fileSizeInKilobytes = item.size
              ? (item.size / 1024).toFixed()
              : null;

            const handleFolderClick = () =>
              props.history.push(`${paths.explorer}/${item.path}`);

            const handleItemClick =
              item.type === "dir" ? handleFolderClick : () => void {};

            return (
              <div key={item.name + "_" + index}>
                <i className={classNamesForItemIcons[item.type]} />
                <button
                  className={classNamesForItemNames[item.type]}
                  onClick={handleItemClick}
                >
                  {item.name}
                </button>
                {fileSizeInKilobytes ? (
                  <>
                    <small className="text-muted">{fileSizeInKilobytes}</small>{" "}
                    <small className="text-muted">КБ</small>
                  </>
                ) : null}
              </div>
            );
          })
        ) : (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
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
