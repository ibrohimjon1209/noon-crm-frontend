import React from "react";
import './style.css';

const Not_found = () => {
  return (
    <div className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <p className="link_404" onClick={() => window.location.href = "/" }>
                  Go to Home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Not_found;
