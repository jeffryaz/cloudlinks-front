import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { Card, CardBody } from "../../../_metronic/_partials/controls";
import SVG from "react-inlinesvg";
import { Spinner } from "react-bootstrap";
import { MODAL } from "../../../service/modalSession/ModalService";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUrl } from "./_redux/CrudHome";
import moment from "moment";

const initialValues = {
  original_link: "",
};

const pattern = /^((http|https|ftp):\/\/)/;

const First = (props) => {
  const { intl } = props;
  const [loadingShorten, setLoadingShorten] = useState(false);
  const [statusShorten, setStatusShorten] = useState(false);
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    if (loadingShorten) window.$("#resultUrl").hide("slow");
    if (!loadingShorten && statusShorten) window.$("#resultUrl").show("slow");
  }, [loadingShorten, statusShorten]);

  const LoginSchema = Yup.object().shape({
    original_link: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION.REQUIRED_FIELD",
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setLoadingShorten(true);
      setStatusShorten(false);
      values.original_link = values.original_link.replace(/\s/g, "");
      if (!pattern.test(values.original_link)) {
        values.original_link = "http://" + values.original_link;
      }
      createUrl(values)
        .then((result) => {
          setLoadingShorten(false);
          setStatusShorten(true);
          setResultData(result.data.data);
          formik.resetForm();
        })
        .catch((err) => {
          console.log("err", err);
          setLoadingShorten(false);
          MODAL.showSnackbar(
            intl.formatMessage({ id: "LABEL.REQUEST_FAILED" }),
            "error",
            3000
          );
        });
    },
  });

  const copys = (message) => {
    copy(message);
    MODAL.showSnackbar(
      intl.formatMessage({ id: "LABEL.ALERT.COPY_URL" }),
      "success",
      3000
    );
  };

  return (
    <React.Fragment>
      <header
        className="masthead"
        style={{
          backgroundImage: `url(${toAbsoluteUrl(
            "media/bg/background-cloudlinks-login.jpg"
          )})`,
          height: "calc(100vh + 10.526rem)",
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-dark">
          <Card>
            <CardBody className="rounded p-0 d-flex bg-light">
              <div className="d-flex flex-column flex-lg-row-auto w-lg-650px w-xl-650px w-xxl-650px py-10 py-md-14 px-10 px-md-20 pr-lg-0">
                <h1 className="font-weight-bolder text-dark mb-0">
                  <FormattedMessage id="LABEL.SHORTEN_URL" />
                </h1>
                <div className="font-size-h4 mb-8">
                  <FormattedMessage id="LABEL.DESK_SHORTEN_URL" />
                </div>
                <form
                  autoComplete="off"
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-center py-2 px-6 bg-white rounded"
                >
                  <input
                    type="text"
                    className="form-control border-0 font-weight-bold pl-2"
                    placeholder={intl.formatMessage({
                      id: "LABEL.URL",
                    })}
                    {...formik.getFieldProps("original_link")}
                    required
                  />
                  {formik.touched.original_link && formik.errors.original_link && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {formik.errors.original_link}
                      </div>
                    </div>
                  )}
                  {loadingShorten ? (
                    <Spinner
                      animation="border"
                      size="sm"
                      className="text-primary"
                    />
                  ) : (
                    <button
                      className="btn btn-icon btn-clean pulse pulse-primary text-primary"
                      type="submit"
                    >
                      <span className="svg-icon svg-icon-sm svg-icon-primary">
                        <SVG
                          src={toAbsoluteUrl(
                            "media/svg/icons/All/link-solid.svg"
                          )}
                        />
                      </span>
                      <span className="pulse-ring"></span>
                    </button>
                  )}
                </form>
                <div className="text-center mt-3 text-muted">
                  <span>
                    By using our service you accept the{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        MODAL.showTerms();
                      }}
                    >
                      Terms
                    </a>{" "}
                    of service and{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        MODAL.showPrivacy();
                      }}
                    >
                      Privacy
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div
                className="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl(
                    "media/svg/illustrations/copy-link.svg"
                  )})`,
                  backgroundPosition: "top",
                }}
              ></div>
            </CardBody>
          </Card>
          <Card id="resultUrl" className="mt-20" style={{ display: "none" }}>
            <div className="card-header ribbon ribbon-top ribbon-ver bg-light">
              <div
                className="ribbon-target bg-primary"
                style={{ top: -2, right: 20, display: "block" }}
              >
                <span>
                  <FormattedMessage id="LABEL.SUCCESS" />
                </span>
                <br />
                <span className="font-size-xs">
                  <FormattedMessage id="LABEL.CREATED" />:{" "}
                  {moment(new Date(resultData?.created_at)).format(
                    "DD MMM YYYY HH:mm:ss"
                  )}
                </span>
              </div>
              <h3 className="card-title">
                <FormattedMessage id="LABEL.RESULT" />
              </h3>
            </div>
            <CardBody className="rounded bg-light">
              <div className="form-group">
                <label>
                  <FormattedMessage id="LABEL.ORIGINAL_URL" />
                </label>
                <div className="input-group">
                  <textarea
                    rows="3"
                    className="form-control"
                    value={resultData?.original_link}
                    onChange={() => {}}
                    disabled
                  ></textarea>
                  <div
                    className="input-group-append cursor-pointer"
                    onClick={() => {
                      copys(resultData?.original_link);
                    }}
                  >
                    <span className="input-group-text text-hover-primary">
                      <i className="far fa-copy p-2 text-dark"></i>
                      <FormattedMessage id="LABEL.COPY" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage id="LABEL.NEW_URL" />
                </label>
                <div className="input-group">
                  <textarea
                    rows="3"
                    className="form-control"
                    value={window.location.origin + "/" + resultData?.new_link}
                    onChange={() => {}}
                    disabled
                  ></textarea>
                  <div
                    className="input-group-append cursor-pointer"
                    onClick={() => {
                      copys(
                        window.location.origin + "/" + resultData?.new_link
                      );
                    }}
                  >
                    <span className="input-group-text text-hover-primary">
                      <i className="far fa-copy p-2 text-dark"></i>
                      <FormattedMessage id="LABEL.COPY" />
                    </span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
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

export default injectIntl(connect(null, null)(First));
