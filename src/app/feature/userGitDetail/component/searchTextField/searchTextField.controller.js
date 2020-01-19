export default class SearchTextFieldController {
  constructor() {
    this.searchText = "";
  }

  searchGitForUser() {
    this.fetchUserDetail({ searchedText: this.searchText });
  }
}
