import React from "react";
import { Router } from "@reach/router";
import App from "../App";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <App path="/" />
      <App path="/:category" />
    </Router>
  );
};
