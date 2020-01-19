import "bootstrap/dist/css/bootstrap.css";
import angular from "angular";
import uirouter from "angular-ui-router";

import routing from "./app.config";
import userGitDetailApp from "./feature/userGitDetail";
import headerComponent from "./feature/shared/components/header/header.component";

angular
  .module("app", [uirouter, userGitDetailApp])
  .config(routing)
  .component("header", headerComponent);
