function randomDataN(context) {
  var doc = context.document;
  // var selectedLayers = context.selection;
  // var box = selectedLayers[0];
  // var boxHeight = box.frame().height();
  var randomRange = 100
  var dataFromTextFieldArray = doc.askForUserInput_initialValue("Enter amount of items (more two)", "23");
  var dataArray = [];
  for (var i = 0; i < dataFromTextFieldArray; i++) {
    if( i == 0) {
      dataArray.push(Math.floor(Math.random() * 1000));
    } else {
      var random2PI = Math.random() * (2 * Math.PI);
      var randomSine = Math.sin(random2PI);
      var randomForGraphPoints = Math.floor(randomSine * randomRange);
      var graphPointY = dataArray[i-1] + randomForGraphPoints;
      dataArray.push(graphPointY);
    }
  };
  // defaults.displayEndPoint = false;
  var options = Object.assign({}, defaults, { dataArray: dataArray });
  generateSparkline(context, options);

}
