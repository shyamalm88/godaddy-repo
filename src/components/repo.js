import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Repo({ data }) {
  const navigate = useNavigate();
  const [repositoryData, setRepositoryData] = useState([]);
  useEffect(() => {
    setRepositoryData(data);
    return () => {
      setRepositoryData([]);
    };
  }, [data]);

  function goToDetailsPage(event, data) {
    navigate("/details/" + data.full_name);
  }

  return repositoryData.map((x) => {
    return (
      <div
        className="card mt-2"
        key={x.id}
        onClick={(e) => goToDetailsPage(e, x)}
      >
        <div className="card-body d-flex align-items-stretch">
          <div>
            <h5 className="card-title">
              <i className="fa fa-book m-r-5" aria-hidden="true"></i>
              {x.name}
            </h5>
          </div>
        </div>
      </div>
    );
  });
}

export default Repo;
