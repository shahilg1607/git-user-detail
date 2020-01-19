import controller from "./searchTextField.controller";
import template from "./searchTextField.html";

const searchTextFieldComponent = {
  template,
  bindings: {
    fetchUserDetail: "&"
  },
  controller
};

export default searchTextFieldComponent;
