import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { Link, useHistory } from "react-router-dom";
import { go } from "./_redux/CrudHome";
import { LayoutSplashScreen } from "../../../_metronic/layout";
import "./styles.scss";

const Redirect = (props) => {
  const { match } = props;
  const [loadingShorten, setLoadingShorten] = useState(true);
  const id = match.params.id;
  const history = useHistory();

  const goState = () => {
    setLoadingShorten(true);
    if (id === "auth") {
      history.push("/auth/login");
    } else {
      go({ new_link: id })
        .then((result) => {
          window.location.replace(result.data.data.original_link);
        })
        .catch((err) => {
          console.log(err);
          setLoadingShorten(false);
        });
    }
  };
  useEffect(goState, []);

  return (
    <React.Fragment>
      {loadingShorten && <LayoutSplashScreen />}
      <div
        style={{
          backgroundImage: `url(${toAbsoluteUrl(
            "media/bg/background-cloudlinks-login.jpg"
          )})`,
          height: "calc(100vh + 10.526rem)",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="mt-10 d-flex justify-content-between">
            <div className="d-flex">
              <i className="far fa-sad-cry font-size-h1 text-primary mx-2"></i>
              <h1>
                <FormattedMessage id="LABEL.PAGE_NOT_FOUND" />
              </h1>
            </div>
            <div>
              <Link to="/" className="btn btn-primary ml-3">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(Redirect));
