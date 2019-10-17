import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Register from "components/Register/Register";

describe("<Register />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Register />);
  });
});
