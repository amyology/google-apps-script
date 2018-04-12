function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  var title = 'Chicago Public Library - Most Popular Fiction Titles in 2014';
  
  //template variables
  template.title = title;
  template.data = JSON.parse(UrlFetchApp.fetch('https://data.cityofchicago.org/resource/v3hq-i8r8.json').getContentText());
  
  return template.evaluate().setTitle(title);
}