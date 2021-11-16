import React, { useEffect } from "react";
import { connect } from "react-redux";
import { injectIntl, FormattedMessage } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { LanguageSelectorDropdown } from "../../../_metronic/layout/components/extras/dropdowns/LanguageSelectorDropdown";
import { DropdownTopbarItemToggler } from "../../../_metronic/_partials/dropdowns";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { QuickUserToggler } from "../../../_metronic/layout/components/extras/QuiclUserToggler";

const Navigation = (props) => {
  const { intl } = props;
  const { isAuthPasien } = useSelector(
    ({ authPasien }) => ({
      isAuthPasien: authPasien?.user !== undefined,
    }),
    shallowEqual
  );
  const collapse = () => {
    if (window.$("#navbarResponsive").css("display") === "none") {
      window.$("#navbarResponsive").show("slow");
    } else {
      window.$("#navbarResponsive").hide("slow");
    }
  };
  useEffect(() => {
    var hash = window.location.hash;
    if (hash === "" || hash === "#page-top") {
      document
        .getElementById("page-top")
        .scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#about") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#sevices") {
      document.getElementById("sevices").scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#team") {
      document.getElementById("team").scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#testimonials") {
      document
        .getElementById("testimonials")
        .scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#news") {
      document.getElementById("news").scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#registrasi") {
      document
        .getElementById("registrasi")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div
          className="container-sm"
          style={{ borderBottom: "2px solid white", borderRadius: 5 }}
        >
          <a className="navbar-brand" href="/">
            <img
              src={toAbsoluteUrl(
                "/media/logos/logo-shortlinks-name-200x200.png"
              )}
              alt="ShortlinksLogo"
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              collapse();
            }}
          >
            <span className="align-text-top">Menu</span>
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarResponsive"
          >
            {isAuthPasien && (
              <ul className="navbar-nav text-uppercase py-4 py-lg-0">
                {/* <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle
                      as={DropdownTopbarItemToggler}
                      id="dropdown-toggle-user-profile"
                    >
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          letterSpacing: "0.0625em",
                          color: "black",
                          display: "block",
                          padding: "0.5rem 0",
                        }}
                        className="cursor-pointer"
                      >
                        Home
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                      <div className="navi navi-spacer-x-0">
                        <a
                          className="nav-link navi-item px-8 cursor-pointer text-decoration-none"
                          href="/"
                          onClick={() => {
                            collapse();
                          }}
                        >
                          <div className="navi-link">
                            <div className="navi-text">
                              <div className="font-weight-bold cursor-pointer">
                                Home
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="separator separator-solid"></div>

                        <a
                          className="nav-link navi-item px-8 cursor-pointer text-decoration-none"
                          href="/"
                          onClick={() => {
                            collapse();
                          }}
                        >
                          <div className="navi-link">
                            <div className="navi-text">
                              <div className="font-weight-bold cursor-pointer">
                                <FormattedMessage id="LABEL.PRICE" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="navi-separator"></div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li> */}
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/price" className="nav-link">
                    <FormattedMessage id="LABEL.PRICE" />
                  </Link>
                </li>
              </ul>
            )}

            {isAuthPasien && (
              <ul className="navbar-nav text-uppercase py-4 py-lg-0">
                <li className="nav-item my-2">
                  <LanguageSelectorDropdown />
                </li>
                <li className="nav-item my-2">
                  <QuickUserToggler className="nav-link" />
                </li>
              </ul>
            )}

            {!isAuthPasien && (
              <ul className="navbar-nav text-uppercase py-4 py-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/price" className="nav-link">
                    <FormattedMessage id="LABEL.PRICE" />
                  </Link>
                </li>
              </ul>
            )}

            {!isAuthPasien && (
              <ul className="navbar-nav text-uppercase py-4 py-lg-0">
                <li className="nav-item my-2 d-flex">
                  <LanguageSelectorDropdown />
                  <Link
                    to="/auth/login"
                    className="nav-link font-weight-bold"
                    style={{ margin: "inherit" }}
                  >
                    <FormattedMessage id="LABEL.LOGIN" />
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(Navigation));
