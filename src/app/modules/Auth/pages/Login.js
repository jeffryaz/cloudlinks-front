import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/ActionAuth";
import { login } from "../_redux/CrudAuth";
import userTableMock from "../__mocks__/userTableMock";
import { seo } from "../../../helpers";

const initialValues = {
  email: "",
  password: "",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "LABEL.VALIDATION.REQUIRED_FIELD",
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "LABEL.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

  useEffect(() => {
    seo({
      title: `Cloudlinks - ${intl.formatMessage({
        id: "LABEL.LOGIN",
      })}`,
    });
  });

  // const showPosition = (position) => {
  //   console.log(
  //     "Latitude: " +
  //       position.coords.latitude +
  //       "<br>Longitude: " +
  //       position.coords.longitude
  //   );
  // };
  // const showError = (error) => {
  //   switch (error.code) {
  //     case error.PERMISSION_DENIED:
  //       console.log("User denied the request for Geolocation.");
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       console.log("Location information is unavailable.");
  //       break;
  //     case error.TIMEOUT:
  //       console.log("The request to get user location timed out.");
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       console.log("An unknown error occurred.");
  //       break;
  //   }
  // };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

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
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        login(values.email, values.password)
          .then(({ data: { token } }) => {
            disableLoading();
            console.log("token", token);
            console.log("props", props);

            const user = userTableMock.find(
              (x) =>
                x.email.toLowerCase() === values.email.toLowerCase() &&
                x.password === values.password
            );
            props.login(token);
            props.fulfillUser(user);
          })
          .catch(() => {
            disableLoading();
            setSubmitting(false);
            setStatus(
              intl.formatMessage({
                id: "LABEL.VALIDATION.INVALID_LOGIN",
              })
            );
          });
      }, 1000);
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="LABEL.LOGIN.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          <FormattedMessage id="LABEL.DESK_LOGIN.TITLE" />
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
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
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder={intl.formatMessage({
              id: "LABEL.PASSWORD",
            })}
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
            disabled
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="LABEL.LOGIN.FORGOT_PASSWORD" />
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
            disabled
          >
            <span>
              <FormattedMessage id="LABEL.COMING_SOON" />
              {/* <FormattedMessage id="LABEL.SIGN_IN" /> */}
            </span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
