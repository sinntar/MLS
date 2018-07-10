import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <div>
      <Menu pointing secondary style={{ margin: "0px 0px 20px 0px" }}>
        <Menu.Item name="MLS - BlockChain" />
        <Link route={`/`}>
          <a>
            <Menu.Item active name="contracts" route="/" />
          </a>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item name="profile" />
          <Menu.Item name="logout" />
        </Menu.Menu>
      </Menu>
    </div>
  );
};
