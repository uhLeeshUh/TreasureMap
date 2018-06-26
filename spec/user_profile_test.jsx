// require("babel-core/register");
// import React from "react";
// import { shallow } from "enzyme";
// import UserShow from "../frontend/components/user_profile/user_show";

const React = require("react");
const shallow = require("enzyme.shallow");
const UserShow = require("../frontend/components/user_profile/user_show");

const shallowUserShow = () => {
  const props = {
    user: {
      id: 1,
      username: "Alicia"
    }
  };
  return shallow(<UserShow {...props} />);
};

describe("UserShow", () => {
  const shallowUser = shallowUserShow();

  it("it takes in the user as props", () => {
    expect(shallowUser.props.user).toBeTruthy();
  });

  it("it displays the username", () => {
    expect(shallowUser.props.user.username).toBe("Alicia");
  });
});
