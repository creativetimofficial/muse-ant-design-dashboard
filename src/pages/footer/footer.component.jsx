import React from "react";

export const FooterComponent = () => {
  return (
    <div class="ant-row-flex" style={{ display: "flex" }}>
      <div class="ant-col ant-col-24 ant-col-md-12">
        <p class="copyright">
          © 2021, made with
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
              fill="#111827"
            ></path>
          </svg>
          by <a href="https://creative-tim.com">Creative Tim</a> for a better
          web.
        </p>
      </div>{" "}
      <div
        class="footer-control ant-col ant-col-24 ant-col-md-12"
        style={{ marginLeft: "auto" }}
      >
        <ul
          role="menu"
          class="ant-menu ant-menu-horizontal ant-menu-root ant-menu-light"
        >
          <li
            role="menuitem"
            class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
            style={{ display: "none" }}
          >
            <div aria-haspopup="true" class="ant-menu-submenu-title">
              <span>···</span>
              <i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li role="menuitem" class="ant-menu-item">
            Creative Tim
          </li>
          <li
            role="menuitem"
            class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
            style={{ display: "none" }}
          >
            <div aria-haspopup="true" class="ant-menu-submenu-title">
              <span>···</span>
              <i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li role="menuitem" class="ant-menu-item">
            About Us
          </li>
          <li
            role="menuitem"
            class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
            style={{ display: "none" }}
          >
            <div aria-haspopup="true" class="ant-menu-submenu-title">
              <span>···</span>
              <i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li role="menuitem" class="ant-menu-item">
            Blog
          </li>
          <li
            role="menuitem"
            class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
            style={{ display: "none" }}
          >
            <div aria-haspopup="true" class="ant-menu-submenu-title">
              <span>···</span>
              <i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
          <li role="menuitem" class="ant-menu-item">
            License
          </li>
          <li
            role="menuitem"
            class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu"
            style={{
              visibility: "hidden",
              position: "absolute",
              display: "none",
            }}
          >
            <div aria-haspopup="true" class="ant-menu-submenu-title">
              <span>···</span>
              <i class="ant-menu-submenu-arrow"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
