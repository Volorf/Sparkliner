function randomData(context) {
  var doc = context.document;
  // var selectedLayers = context.selection;
  // var box = selectedLayers[0];
  // var boxHeight = box.frame().height();
  var dataFromTextFieldArray = doc.askForUserInput_initialValue("Enter amount of items (more two)", "23");
  var dataArray = [];
  for (var i = 0; i < dataFromTextFieldArray; i++) {
    dataArray.push(Math.floor(Math.random() * 1000));
  }
  // defaults.displayEndPoint = false
  var options = Object.assign({}, defaults, { dataArray: dataArray });
  generateSparkline(context, options);

}
