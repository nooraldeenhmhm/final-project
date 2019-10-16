import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Home from "components/Home/Home";

describe("<Home />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Home />);
  });
});
