import React, { Suspense, lazy, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout, LayoutSplashScreen } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { useLang } from "../_metronic/i18n";

const Home = lazy(() => import("./modules/Home/Home"));
const Redirects = lazy(() => import("./modules/Home/Redirect"));
const HomeSecond = lazy(() => import("./modules/Home/HomeSecond"));

export function Routes() {
  const lang = useLang();
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  useEffect(() => {
    window.moment.locale(lang);
  }, [lang]);

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Route exact path="/price" component={HomeSecond} />
        <Route exact path="/:id" component={Redirects} />
        <Route exact path="/" component={Home} />
        {!isAuthorized ? (
          <Route>
            <AuthPage />
          </Route>
        ) : (
          <Redirect from="/auth" to="/auth/login" />
        )}

        <Route path="/error" component={ErrorsPage} />
        <Route path="/logout" component={Logout} />

        {!isAuthorized ? (
          <Redirect to="/auth/login" />
        ) : (
          <Layout>
            <BasePage />
          </Layout>
        )}
      </Switch>
    </Suspense>
  );
}
