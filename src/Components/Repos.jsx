import React from "react";

function Repos({ repos }) {
  return (
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-md-6">
          <a href={repos.html_url} target="_blank" rel="noopener noreferrer">
            {repos.name}
          </a>
        </div>
        <div className="col-md-5">
          <span className="badge badge-primary">
            Stars: {repos.stargazers_count}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Repos;
