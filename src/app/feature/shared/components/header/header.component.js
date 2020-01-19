import template from "./header.html";

let headerComponent = {
  template,
  bindings: {
    pageTitle: "@"
  }
};

export default headerComponent;
