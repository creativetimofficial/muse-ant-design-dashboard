import { Col, Row } from "antd";
import { Content, Footer as AntFooter } from "antd/lib/layout/layout";
import { Switch, useLocation } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function Docs({ children }) {
  const { pathname } = useLocation();

  pathname.includes("docs") && import("../assets/styles/docs.css");

  return (
    <>
      <Row>
        <Col>
          <Menu />
        </Col>
        <Col>
          <Switch>
            <Content>{children}</Content>
          </Switch>
        </Col>
      </Row>
      <AntFooter className="footer-content">
        <Footer />
      </AntFooter>
    </>
  );
}

export default Docs;
