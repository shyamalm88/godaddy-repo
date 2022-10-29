import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailsData } from "../actions/detailsAction";

import { connect } from "react-redux";

function Details({ detailsData }) {
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(param);
    const urlEndPoints = {
      domain: param.domain,
      url: param.url,
    };
    dispatch(fetchDetailsData(urlEndPoints));
    return () => {};
  }, []);

  return (
    <div className="mt-2 container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{detailsData.data.full_name}</h5>
          <p className="card-text">{detailsData.data.description}</p>
          <div className="attributes mb-2">
            <span
              className="card-subtitle mb-2 m-r-15 text-danger"
              title="Language"
            >
              <i className="fa fa-code m-r-5" aria-hidden="true"></i>
              {detailsData.data.language}
            </span>
            <span className="card-subtitle mb-2 m-r-15 text-muted" title="Fork">
              <i className="fa fa-code-fork m-r-5" aria-hidden="true"></i>
              {detailsData.data.forks}
            </span>
            <span
              className="card-subtitle mb-2 m-r-15 text-muted"
              title="Watcher"
            >
              <i className="fa fa-eye m-r-5" aria-hidden="true"></i>
              {detailsData.data.watchers}
            </span>
            <span
              className="card-subtitle mb-2 m-r-15 text-muted"
              title="Open Issues"
            >
              <i className="fa fa-bug m-r-5" aria-hidden="true"></i>
              {detailsData.data.open_issues}
            </span>
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
