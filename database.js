var props = PropertiesService.getScriptProperties(),
    dbInstance = 'jdbc:google:mysql://' + props.getProperty('db-url'),
    dbUrl = dbInstance + '/' + props.getProperty('db-name'),
    dbUser = props.getProperty('db-user'),
    dbPwd = props.getProperty('db-pwd'),
    connection = Jdbc.getCloudSqlConnection(dbUrl, dbUser, dbPwd);

function runQuery () {
  var statement = connection.createStatement(),
      result = statement.executeQuery('SELECT * FROM project'),
      numCols = result.getMetaData().getColumnCount(),
      resultArray = [],
      rowCount = 0;
  
  while(result.next()) {
    resultArray.push({});
    for (var i = 1; i <= numCols; i++) {
      resultArray[rowCount][result.getMetaData().getColumnName(i)] = result.getString(i);
    }
    rowCount++;
  }
  
  Logger.log(resultArray);
}

//function create () {
//  var statement = connection.prepareStatement('INSERT INTO project ' + '(id, name) values (?, ?)');
//  stmt.setString(1, 1);
//  stmt.setString(2, 'Cocoa Puffs');
//  stmt.execute();
//}