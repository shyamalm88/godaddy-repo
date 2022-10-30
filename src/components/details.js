import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  fetchDetailsData,
  repoDetailsSuccessAction,
} from "../actions/detailsAction";

import { connect } from "react-redux";

function Details({ detailsData }) {
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const urlEndPoints = {
      domain: param.domain,
      url: param.url,
    };
    dispatch(fetchDetailsData(urlEndPoints));
    return () => {
      dispatch(repoDetailsSuccessAction({}));
    };
  }, []);

  return (
    <div className="mt-2 container">
      <Link to="/">
        <i className="fa fa-chevron-left" aria-hidden="true"></i> Back
      </Link>
      <div className="card">
        <div className="card-body">
          {detailsData.data.full_name && (
            <h5 className="card-title">
              <a
                href={`${detailsData.data.html_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-book m-r-5" aria-hidden="true"></i>
                {detailsData.data.full_name}
              </a>
            </h5>
          )}
          {detailsData.data.description && (
            <p className="card-text">{detailsData.data.description}</p>
          )}

          <div className="attributes mb-2">
            {detailsData.data.language && (
              <span
                className="card-subtitle mb-2 m-r-15 text-danger"
                title="Language"
              >
                <i className="fa fa-code m-r-5" aria-hidden="true"></i>
                {detailsData.data.language}
              </span>
            )}

            {detailsData.data.forks && (
              <span
                className="card-subtitle mb-2 m-r-15 text-muted"
                title="Fork"
              >
                <i className="fa fa-code-fork m-r-5" aria-hidden="true"></i>
                {detailsData.data.forks}
              </span>
            )}

            {detailsData.data.watchers && (
              <span
                className="card-subtitle mb-2 m-r-15 text-muted"
                title="Watcher"
              >
                <i className="fa fa-eye m-r-5" aria-hidden="true"></i>
                {detailsData.data.watchers}
              </span>
            )}

            {detailsData.data.open_issues >= 0 && (
              <span
                className="card-subtitle mb-2 m-r-15 text-muted"
                title="Open Issues"
              >
                <i className="fa fa-bug m-r-5" aria-hidden="true"></i>
                {detailsData.data.open_issues}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    detailsData: state.detailsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDetailsData: () => dispatch(fetchDetailsData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
