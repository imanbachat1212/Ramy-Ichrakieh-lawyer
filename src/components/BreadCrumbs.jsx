import React from "react";

function BreadCrumbs() {
  return (
    <>
      {/* <!-- breadcumb area --> */}
      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 txtc  text-center ccase">
              <div className="brpt">
                <h2>Who We Are </h2>
              </div>
              {/* <div className="breadcumb-inner">
                <ul>
                  <li>
                    You are currently here!{" "}
                    <i className="icofont-thin-right"></i>{" "}
                  </li>
                  <li>
                    <a href="#" rel="v:url" property="v:title">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="icofont-thin-right"></i>
                  </li>
                  <li>
                    <span className="current">About 02</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadCrumbs;
