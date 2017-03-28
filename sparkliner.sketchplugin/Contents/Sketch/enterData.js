function enterData(context) {
  var doc = context.document;
	var dataFromTextFieldArray = doc.askForUserInput_initialValue("Enter your data", "10, 30, 3, 8, 39, 25, 22, 89, 74, 7, 2, 40, 61, 17, 35, 31, 8, 14, 39, 32, 53");
	var dataArray = dataFromTextFieldArray.trim().split(", ").map(Number);
  // defaults.displayEndPoint = false
  var options = Object.assign({}, defaults, { dataArray: dataArray });
  generateSparkline(context, options);
}
