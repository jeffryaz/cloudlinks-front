import React from "react";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";

const Second = (props) => {
  // const { intl } = props;
  const history = useHistory();

  return (
    <React.Fragment>
      <header
        className="masthead"
        style={{
          backgroundImage: `url(${toAbsoluteUrl(
            "media/bg/background-cloudlinks-login.jpg"
          )})`,
          height: "calc(100vh + 35rem)",
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-dark">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-custom card-stretch gutter-b">
                <div className="card-body">
                  <div className="d-flex justify-content-between flex-column h-100">
                    <div className="h-100">
                      <div className="d-flex flex-column flex-center">
                        <div
                          className="bgi-no-repeat bgi-size-cover rounded min-h-180px w-100"
                          style={{
                            backgroundImage: `url(${toAbsoluteUrl(
                              "media/logos/link.png"
                            )})`,
                          }}
                        ></div>
                        <a
                          href="#"
                          className="card-title font-weight-bolder text-dark-75 text-hover-primary font-size-h4 m-0 pt-7 pb-1"
                        >
                          <FormattedMessage id="LABEL.FREE_USER" />
                        </a>
                        <div className="font-weight-bold text-dark-50 font-size-sm pb-7">
                          <FormattedMessage id="LABEL.FEATURE" />
                        </div>
                      </div>
                      <div className="pt-1">
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i className="fas fa-check font-size-h2"></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              Users can create URLs for free.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i className="fas fa-check font-size-h2"></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              The URL that is created consists of 5 unique
                              characters that are easy to remember.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i className="fas fa-check font-size-h2"></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              URL is only active up to 3 Months. After 3 months
                              it will be automatically deleted by the system.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-center">
                      <button
                        className="btn btn-primary font-weight-bolder font-size-sm py-3 px-14"
                        onClick={() => {
                          history.push("/");
                        }}
                      >
                        <FormattedMessage id="LABEL.GO" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-custom card-stretch gutter-b">
                <div className="card-body">
                  <div className="d-flex justify-content-between flex-column h-100">
                    <div className="h-100">
                      <div className="d-flex flex-column flex-center">
                        <div
                          className="bgi-no-repeat bgi-size-cover rounded min-h-180px w-100"
                          style={{
                            backgroundImage: `url(${toAbsoluteUrl(
                              "media/logos/link-gold.png"
                            )})`,
                          }}
                        ></div>
                        <a
                          href="#"
                          className="card-title font-weight-bolder text-dark-75 text-hover-primary font-size-h4 m-0 pt-7 pb-1"
                        >
                          <FormattedMessage id="LABEL.PREMIUM_USER" />
                        </a>
                        <div className="font-weight-bold text-dark-50 font-size-sm pb-7">
                          <FormattedMessage id="LABEL.FEATURE" />
                        </div>
                      </div>
                      <div className="pt-1">
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i
                                  className="fas fa-check font-size-h2"
                                  style={{ color: "#FFD700" }}
                                ></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              Users can create URLs at affordable prices.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i
                                  className="fas fa-check font-size-h2"
                                  style={{ color: "#FFD700" }}
                                ></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              Users can create URLs as they wish.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i
                                  className="fas fa-check font-size-h2"
                                  style={{ color: "#FFD700" }}
                                ></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              There is no limit to the number of URL characters
                              created.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i
                                  className="fas fa-check font-size-h2"
                                  style={{ color: "#FFD700" }}
                                ></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              Can generate QR Code.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i
                                  className="fas fa-check font-size-h2"
                                  style={{ color: "#FFD700" }}
                                ></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              Users can view statistics of URLs that have been
                              created. such as the number of clickers and the
                              location of the clickers.
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-9">
                          <div className="symbol symbol-45 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-2x svg-icon-dark-50">
                                <i
                                  className="fas fa-check font-size-h2"
                                  style={{ color: "#FFD700" }}
                                ></i>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column flex-grow-1">
                            <span className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                              URL is only active up to 6/12 Months. After 6/12
                              months it will be automatically deleted by the
                              system.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-center">
                      <button className="btn btn-primary font-weight-bolder font-size-sm py-3 px-14">
                        <FormattedMessage id="LABEL.COMING_SOON" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div className="container text-center">
          <small>Copyright &copy; 2022 Cloudlinks</small>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(Second));
