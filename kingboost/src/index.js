import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <>
    <BrowserRouter>
      <App tab="home" />
      <GlobalStyles></GlobalStyles>
    </BrowserRouter>
  </>
);
