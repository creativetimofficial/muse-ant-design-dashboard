import React from "react";
import { Alert, Button } from "antd";

const AlertOnClick = (props) => {
  return (
    <div>
      {props.state ? (
        <Alert
          message="Copied!"
          type="success"
          showIcon
          action={<Button size="small" type="text"></Button>}
          closable
          className="alert-copy-code alert-copy-code-color-page"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default AlertOnClick;
