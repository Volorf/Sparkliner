var defaults = {
  strokeColor: "#00AAFF",
  thickness: 1,
  displayEndPoint: true,
  endPointColor: "#DD2020",
  endPointRadius: 2,
  removeInitialBox: true
};

/*
 * Create a color from an SVG string
 * @method makeColor
 * @param  {String}  SVGString
 */
function makeColor(SVGString) {
  return MSImmutableColor.colorWithSVGString(SVGString).newMutableCounterpart();
}

/*
 * Generate the sparkline
 * @method generateSparkline
 * @param  {Object} context [description]
 * @param  {Object} options [description]
 */
function generateSparkline(context, options) {

  if (!options || typeof options !== 'object') options = defaults;

  var selectedLayers = context.selection;
	var selectedCount = selectedLayers.count();
	var doc = context.document;

	var box = selectedLayers[0];
	var daysAmount = options.dataArray.length;

	if (selectedCount == 1) {

		var boxWidth = box.frame().width();
		var boxHeight = box.frame().height();
  	var boxX = box.frame().x();
  	var boxY = box.frame().y();

		// Define width of one column
		var dotOffset = boxWidth / (daysAmount - 1);

		// Find max value in array
		var maxValueInArray = Math.max.apply(Math, options.dataArray);

		// Find min value in array
		var minValueInArray = Math.min.apply(Math, options.dataArray);

		// Find delta of values in array
 		var deltaValueInArray = maxValueInArray - minValueInArray;

		// Define relevant unit for the box
		var relevantUnit = boxHeight / deltaValueInArray;

  	var dotY = 0;
  	var dotX = 0;

		var endPoint = options.dataArray.length - 1;

  	var path = NSBezierPath.bezierPath();

		// doc.showMessage(minValueInArray.toString());

    path.moveToPoint(NSMakePoint(0,0));

		for (var i = 0; i < options.dataArray.length; i++) {
    	dotX = dotOffset * i;
    	dotY =  - (options.dataArray[i] - minValueInArray) * relevantUnit;
    	if (i == 0) {
    		path.moveToPoint(NSMakePoint(dotX,dotY));
    	}
    	path.lineToPoint(NSMakePoint(dotX,dotY));

			// Create end markpoint
			if (i == endPoint) {

				var ovalShape = MSOvalShape.alloc().init();
				ovalShape.frame = MSRect.rectWithRect(NSMakeRect(0,0,(options.endPointRadius * 2),(options.endPointRadius * 2)));

				var shapeGroup = MSShapeGroup.shapeWithPath(ovalShape);
				// Changed layer.style().fills().addNewStylePart() to layer.style().addStylePartOfType(0) for Sketch 3.8
				var fill = shapeGroup.style().addStylePartOfType(0);
				fill.color = makeColor(options.endPointColor);
				shapeGroup.frame().midX = dotX + boxX;
				shapeGroup.frame().midY = dotY + boxY + boxHeight;

			}

    }

		var shape = MSShapeGroup.shapeWithBezierPath(path);
		// Changed layer.style().borders().addNewStylePart() to style().addStylePartOfType(1) for Sketch 3.8
		var border = shape.style().addStylePartOfType(1);
		border.color = makeColor(options.strokeColor);
		border.thickness = options.thickness;

		shape.frame().x = boxX;
		shape.frame().y = boxY;

		// Add graph to current artboard
		doc.currentPage().currentArtboard().addLayers([shape]);
		if (options.displayEndPoint == true) {
			doc.currentPage().currentArtboard().addLayers([shapeGroup]);
		}

		// Remove initial box
		if (options.removeInitialBox == true) {
  		doc.currentPage().currentArtboard().removeLayer(box);
		}

	} else {
		doc.showMessage("You should select one rectangle.");
	}

}

/*
 * Create a sparkline from JSON
 * @method createWithJson
 * @param  {Object} context
 */
function createWithJson(context) {

	@import "get-json-and-parse-it.js"

	generateSparkline(context, options);
}

/*
 * Create a sparkline from user-inputted data
 * @method enterData
 * @param  {Object} context
 */
function enterData(context) {
  var doc = context.document;
	var dataFromTextFieldArray = doc.askForUserInput_initialValue("Enter your data", "10, 30, 3, 8, 39, 25, 22, 89, 74, 7, 2, 40, 61, 17, 35, 31, 8, 14, 39, 32, 53");
	var dataArray = dataFromTextFieldArray.trim().split(", ").map(Number);
  defaults.displayEndPoint = false
  var options = Object.assign({}, defaults, { dataArray: dataArray });
  generateSparkline(context, options);
}

/*
 * Create a sparkline from random data
 * @method randomData
 * @param  {Object} context
 */
function randomData(context) {
  var doc = context.document;
  var dataFromTextFieldArray = doc.askForUserInput_initialValue("Enter amount of items (more two)", "23");
  var dataArray = [];
  for (var i = 0; i < dataFromTextFieldArray; i++) {
    dataArray.push(Math.floor(Math.random() * 100));
  }
  defaults.displayEndPoint = false
  var options = Object.assign({}, defaults, { dataArray: dataArray });
  generateSparkline(context, options);

}
