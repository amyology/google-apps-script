function runQuery () {
  var props = PropertiesService.getScriptProperties(),
      dbUrl = props.getProperty('db-url'),
      dbUser = props.getProperty('db-user'),
      dbPwd = props.getProperty('db-pwd'),
      connection = Jdbc.getCloudSqlConnection(dbUrl, dbUser, dbPwd),
      statement = connection.createStatement(),
      result = statement.executeQuery('SELECT * FROM project'),
      resultArray = [];
  
  while(result.next()) {
    resultArray.push({
      'id': result.getString(1),
      'name': result.getString(2),
      'version': result.getString(3)
    });
  }
  
  Logger.log(resultArray);
}
