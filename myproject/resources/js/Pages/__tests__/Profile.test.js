import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Profile from "s/Profile";

describe("<Profile />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Profile />);
  });
});
