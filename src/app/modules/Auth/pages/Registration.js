import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/ActionAuth";
import { register } from "../_redux/CrudAuth";
import { seo } from "../../../helpers";
import { MODAL } from "../../../../service/modalSession/ModalService";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

function Registration(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    fullname: Yup.string().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION.REQUIRED_FIELD",
      })
    ),
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
    password: Yup.string()
      .min(
        5,
        intl.formatMessage({
          id: "LABEL.VALIDATION.MIN_5_CHARACTER",
        })
      )
      .max(
        50,
        intl.formatMessage({
          id: "LABEL.VALIDATION.MAX_50_CHARACTER",
        })
      )
      .required(
        intl.formatMessage({
          id: "LABEL.VALIDATION.REQUIRED_FIELD",
        })
      ),
    changepassword: Yup.string()
      .required(
        intl.formatMessage({
          id: "LABEL.VALIDATION.REQUIRED_FIELD",
        })
      )
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          intl.formatMessage({
            id: "LABEL.VALIDATION.PASSWORD_NO_MATCH",
          })
        ),
      }),
    acceptTerms: Yup.bool().required(
      intl.formatMessage({
        id: "LABEL.VALIDATION.TERMS",
      })
    ),
  });

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
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      enableLoading();
      register(values.email, values.fullname, values.password)
        .then(({ data: { accessToken } }) => {
          props.register(accessToken);
          disableLoading();
          setSubmitting(false);
        })
        .catch(() => {
          setSubmitting(false);
          setStatus(
            intl.formatMessage({
              id: "LABEL.VALIDATION.INVALID_REGISTER",
            })
          );
          disableLoading();
        });
    },
  });

  useEffect(() => {
    seo({
      title: `Cloudlinks - ${intl.formatMessage({
        id: "LABEL.REGISTER.TITLE",
      })}`,
    });
  }, [intl]);

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="LABEL.REGISTER.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          <FormattedMessage id="LABEL.DESK_REGISTER.TITLE" />
        </p>
      </div>

      <form
        id="kt_login_signin_form"
        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
        onSubmit={formik.handleSubmit}
      >
        {/* begin: Alert */}
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}
        {/* end: Alert */}

        {/* begin: Fullname */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder={intl.formatMessage({
              id: "LABEL.FULL_NAME",
            })}
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "fullname"
            )}`}
            name="fullname"
            {...formik.getFieldProps("fullname")}
            disabled
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.fullname}</div>
            </div>
          ) : null}
        </div>
        {/* end: Fullname */}

        {/* begin: Email */}
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
        {/* end: Email */}

        {/* begin: Password */}
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
        {/* end: Password */}

        {/* begin: Confirm Password */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder={intl.formatMessage({
              id: "LABEL.CONFIRM_PASSWORD",
            })}
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "changepassword"
            )}`}
            name="changepassword"
            {...formik.getFieldProps("changepassword")}
            disabled
          />
          {formik.touched.changepassword && formik.errors.changepassword ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                {formik.errors.changepassword}
              </div>
            </div>
          ) : null}
        </div>
        {/* end: Confirm Password */}

        {/* begin: Terms and Conditions */}
        <div className="form-group">
          <label className="checkbox">
            <input
              type="checkbox"
              name="acceptTerms"
              className="m-1"
              {...formik.getFieldProps("acceptTerms")}
              disabled
            />
            <a
              href="#"
              className="text-dark-75 text-hover-primary ml-4"
              onClick={(e) => {
                e.preventDefault();
                MODAL.showTerms();
              }}
            >
              <FormattedMessage id="LABEL.LOGIN.TERMS" />
            </a>
            <span />
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          ) : null}
        </div>
        {/* end: Terms and Conditions */}
        <div className="form-group d-flex flex-wrap flex-center">
          <button
            type="submit"
            // disabled={
            //   formik.isSubmitting ||
            //   !formik.isValid ||
            //   !formik.values.acceptTerms
            // }
            disabled
            className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
          >
            <span>
              <FormattedMessage id="LABEL.COMING_SOON" />
              {/* <FormattedMessage id="LABEL.SUBMIT" /> */}
            </span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>

          <Link to="/auth/login">
            <button
              type="button"
              className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
            >
              <FormattedMessage id="LABEL.CANCEL" />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));
