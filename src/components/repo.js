import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Repo({ data }) {
  const navigate = useNavigate();
  const [repositoryData, setRepositoryData] = useState([]);
  useEffect(() => {
    setRepositoryData(data);
    return () => {};
  }, [data]);

  function goToDetailsPage(event, data) {
    navigate("/details/" + data.full_name);
  }

  return repositoryData.map((x) => {
    return (
      <div className="card mt-2" key={x.id}>
        <div className="card-body d-flex align-items-stretch">
          <div>
            <h5 className="card-title">
              <a
                href={`${x.html_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-book m-r-5" aria-hidden="true"></i>
                {x.name}
              </a>
            </h5>

            {/* <p className="card-text">{x.description}</p> */}
          </div>

          <div className="m-l-auto align-self-center">
            <button
              onClick={(e) => goToDetailsPage(e, x)}
              className="detailsButton"
            >
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  });
}

export default Repo;
