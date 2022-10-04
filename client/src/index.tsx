import React from "react";
import { App } from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { createRoot } from "react-dom/client";

const store = setupStore();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
