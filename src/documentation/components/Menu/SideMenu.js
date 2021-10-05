import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { Menu } from "antd";

function SideMenu({ title, icon, children }) {
  return (
    <div>
      <Menu.ItemGroup
        title={[
          <>
            {icon} <span className="label">{title}</span>
          </>,
        ]}
      >
        {children.map(({ id, toPath, title }) => {
          return (
            <Menu.Item key={id}>
              <Fragment key={id}>
                <NavLink to={`/docs${toPath}`}>{title}</NavLink>
              </Fragment>
            </Menu.Item>
          );
        })}
      </Menu.ItemGroup>
    </div>
  );
}

export default SideMenu;
