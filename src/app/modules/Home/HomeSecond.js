import React, { useEffect } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { seo } from "../../helpers";
import Navigation from "./Navigation";
import Second from "./Second";
import "./styles.scss";

function HomeSecond(props) {
  const { intl } = props;

  const navbarShrink = () => {
    let navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  useEffect(() => {
    navbarShrink();
    seo({
      title: `Cloudlinks - ${intl.formatMessage({
        id: "LABEL.TITLE_SEO_PRICE",
      })}`,
      metaDescription: intl.formatMessage({
        id: "LABEL.DESK_SEO_PRICE",
      }),
    });
  }, [intl]);

  useEffect(() => {
    document.addEventListener("scroll", navbarShrink);
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      return responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  }, []);
  return (
    <React.Fragment>
      <div id="page-top">
        <Navigation {...props} />
        <Second {...props} />
      </div>
    </React.Fragment>
  );
}

export default injectIntl(connect(null, null)(HomeSecond));
