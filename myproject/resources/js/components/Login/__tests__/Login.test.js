import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Login from "components/Login/Login";

describe("<Login />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Login />);
  });
});
