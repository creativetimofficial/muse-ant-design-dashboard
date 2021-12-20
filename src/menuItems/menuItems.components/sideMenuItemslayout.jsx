import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";

import { Menu } from "antd";

export const SideMenuItemslayout = (props) => {
  return (
    <div>
      <Menu.ItemGroup
        title={[
          <>
            {props.icon} <span className="label">{props.title}</span>
          </>,
        ]}
      >
        {props.children.map((child, idx) => {
          return (
            <Menu.Item key={child.id}>
              <Fragment key={child.id}>
                <NavLink to={child.toPath}>
                  {child.title} {child.label}
                </NavLink>
              </Fragment>
            </Menu.Item>
          );
        })}
      </Menu.ItemGroup>
    </div>
  );
};
