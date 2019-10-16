import React from "react";
import fakeEvent from "fake-event";

import { render, fireEvent, wait, store } from "../../../../tests/utils";
import Item from "components/Item/Item";

describe("<Item />", () => {
  beforeEach(() => {

  });

  it("renders without crashing", () => {
    render(<Item />);
  });
});
