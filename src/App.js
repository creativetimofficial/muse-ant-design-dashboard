import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { Content, Footer } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router";
import "./App.css";

import MenuItems from "./menuItems/menu.Items";
import { FooterComponent } from "./pages/footer/footer.component";
import { routes } from "./utils/components.routes";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <MenuItems />
        </Col>
        <Col>
          <Switch>
            <Content>
              {routes.map((item) => (
                <Route
                  exact={item.exact}
                  path={item.path}
                  component={item.component}
                />
              ))}
            </Content>
          </Switch>
        </Col>
      </Row>
      <Footer className="footer-content">
        <FooterComponent />
      </Footer>
    </div>
  );
}

export default App;
