/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import { FormattedMessage } from "react-intl";
import { MODAL } from "../../../../service/modalSession/ModalService";

export function AuthPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl(
                "/media/bg/background-cloudlinks-login.jpg"
              )})`,
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              {/* start:: Aside header */}
              <Link to="/" className="flex-column-auto mt-5 pb-lg-0 pb-10">
                <img
                  alt="Logo"
                  className="max-h-150px"
                  src={toAbsoluteUrl(
                    "/media/logos/logo-shortlinks-200x200.png"
                  )}
                />
              </Link>
              {/* end:: Aside header */}

              {/* start:: Aside content */}
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 className="font-size-h1 mb-5 ">
                  <FormattedMessage id="LABEL.WELLCOME_LOGIN" />
                </h3>
                <p className="font-weight-lighter  opacity-80">
                  <FormattedMessage id="LABEL.DESK_LOGIN" />
                </p>
              </div>
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-70 font-weight-bold	">
                  &copy; 2022 Cloudlinks
                </div>
                <div className="d-flex">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      MODAL.showPrivacy();
                    }}
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="ml-10"
                    onClick={(e) => {
                      e.preventDefault();
                      MODAL.showTerms();
                    }}
                  >
                    Terms
                  </a>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
            {/*begin::Content header*/}
            <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                <FormattedMessage id="LABEL.DONT_HAVE_ACCOUNT" />
              </span>
              <Link
                to="/auth/registration"
                className="font-weight-bold ml-2"
                id="kt_login_signup"
              >
                <FormattedMessage id="LABEL.SIGN_UP" />
              </Link>
            </div>
            <div className="position-absolute top-0 left-0 text-left mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                <FormattedMessage id="LABEL.LOGIN.GO_BACK" />
              </span>
              <Link
                to="/"
                className="font-weight-bold ml-2"
                id="kt_login_signup"
              >
                Home
              </Link>
            </div>
            {/*end::Content header*/}

            {/* begin::Content body */}
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/registration"
                  component={Registration}
                />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/" />
              </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2022 Cloudlinks
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <a
                  href="#"
                  className="text-dark-75 text-hover-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    MODAL.showPrivacy();
                  }}
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-dark-75 text-hover-primary ml-4"
                  onClick={(e) => {
                    e.preventDefault();
                    MODAL.showTerms();
                  }}
                >
                  Terms
                </a>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
