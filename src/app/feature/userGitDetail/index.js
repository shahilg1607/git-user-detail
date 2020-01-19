import angular from "angular";
import uirouter from "angular-ui-router";

import routing from "./userGitDetail.routes";

import userGitDetailComponent from "./userGitDetail.component";
import searchTextFieldComponent from "./component/searchTextField/searchTextField.component";
import userDetailDisplayComponent from "./component/userDetailDisplay/userDetailDisplay.component";
import UserGitDetailService from "./userGitDetail.service";

export default angular
  .module("userGitDetailApp", [uirouter])
  .config(routing)

  .component("userGitDetail", userGitDetailComponent)
  .component("searchTextField", searchTextFieldComponent)
  .component("userDetailDisplay", userDetailDisplayComponent)
  .service("userGitDetailService", UserGitDetailService).name;
