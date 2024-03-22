import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/error/ErrorPage.tsx";
import { LogError } from "./lib/utils.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage} onError={LogError}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
