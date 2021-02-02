var lines = 6;
for (var i = 0; i<lines; i++){
  for (var j = 0; j <i+1; j++){
    document.write("#");
  }
    document.write("<br/>")
}
for (var i = 0; i < lines; i++){
  for (var j = 0; j < lines - i; j++){
    document.write("#");
  }
  
  document.write("<br/>");
}
