import { App } from "./components/App/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { storeAppState } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeAppState}>
    <BrowserRouter basename="/films/">
      <App />
    </BrowserRouter>
  </Provider>
);
