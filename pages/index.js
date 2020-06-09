import { useDispatch } from "react-redux";

import Clock from "../components/clock";
import Counter from "../components/counter";
import { tick } from "../lib/slices/clockSlice";
import useInterval from "../lib/useInterval";
import CssBaseline from "@material-ui/core/CssBaseline";
import { i18n, Link, withTranslation } from "../i18n";

const IndexPage = ({ t }) => {
  const dispatch = useDispatch();
  // Tick the time every second
  useInterval(() => {
    dispatch(tick({ light: true, lastUpdate: Date.now() }));
  }, 1000);

  return (
    <>
      <h1>Next.js + PWA = {t("awesome").toLocaleUpperCase()}!</h1>

      <CssBaseline />
      <Clock />
      <Counter />
    </>
  );
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(IndexPage);
