import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as Yup from "yup";
import { injectIntl, FormattedMessage } from "react-intl";
import * as auth from "../_redux/ActionAuth";
import { requestPassword } from "../_redux/CrudAuth";
import { seo } from "../../../helpers";

const initialValues = {
  email: "",
};

function ForgotPassword(props) {
  const { intl } = props;
  const [isRequested, setIsRequested] = useState(false);
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email(
        intl.formatMessage({
          id: "LABEL.VALIDATION.FORMAT_EMAIL",
        })
      )
      .required(
        intl.formatMessage({
          id: "LABEL.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      requestPassword(values.email)
        .then(() => setIsRequested(true))
        .catch(() => {
          setIsRequested(false);
          setSubmitting(false);
          setStatus(
            intl.formatMessage(
              { id: "LABEL.VALIDATION.EMAIL_NOT_FOUND" },
              { name: values.email }
            )
          );
        });
    },
  });

  useEffect(() => {
    seo({
      title: `Cloudlinks - ${intl.formatMessage({
        id: "LABEL.LOGIN.FORGOT_PASSWORD",
      })}`,
    });
  }, [intl]);

  return (
    <>
      {isRequested && <Redirect to="/auth" />}
      {!isRequested && (
        <div className="login-form login-forgot" style={{ display: "block" }}>
          <div className="text-center mb-10 mb-lg-20">
            <h3 className="font-size-h1">
              <FormattedMessage id="LABEL.FORGOTTED_PASSWORD.TITLE" />
            </h3>
            <div className="text-muted font-weight-bold">
              <FormattedMessage id="LABEL.DESK_FORGOTTED_PASSWORD.TITLE" />
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
          >
            {formik.status && (
              <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                <div className="alert-text font-weight-bold">
                  {formik.status}
                </div>
              </div>
            )}
            <div className="form-group fv-plugins-icon-container">
              <input
                placeholder="email"
                type="email"
                className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                  "email"
                )}`}
                name="email"
                {...formik.getFieldProps("email")}
                disabled
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.email}</div>
                </div>
              ) : null}
            </div>
            <div className="form-group d-flex flex-wrap flex-center">
              <button
                id="kt_login_forgot_submit"
                type="submit"
                className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                // disabled={formik.isSubmitting}
                disabled
              >
                <FormattedMessage id="LABEL.COMING_SOON" />
                {/* <FormattedMessage id="LABEL.SUBMIT" /> */}
              </button>
              <Link to="/auth">
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  <FormattedMessage id="LABEL.CANCEL" />
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default injectIntl(connect(null, auth.actions)(ForgotPassword));
