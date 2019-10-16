import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Header from "components/Header/Header";

describe("<Header />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Header />);
  });
});
