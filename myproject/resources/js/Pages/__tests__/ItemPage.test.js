import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import ItemPage from "s/ItemPage";

describe("<ItemPage />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<ItemPage />);
  });
});
