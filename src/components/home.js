import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchRepoData } from "../actions/repoListAction";
import Repo from "./repo";

function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepoData());
    return () => {};
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          {<Repo data={props.repoData.repoData} />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repoData: state.repoData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRepoData: () => dispatch(fetchRepoData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
