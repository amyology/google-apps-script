//Helper methods

//include pages
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}