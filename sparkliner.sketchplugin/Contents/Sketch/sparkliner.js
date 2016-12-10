function makeColor(SVGString) {
    return MSImmutableColor.colorWithSVGString(SVGString).newMutableCounterpart();
}

function createWithJson(context) {

	@import "get-json-and-parse-it.js"

	var selectedLayers = context.selection;
	var selectedCount = selectedLayers.count();
	var doc = context.document;

	// Check data a bit
	// @import "checkdata.js"

	// Create sparkline

	var box = selectedLayers[0];
	var daysAmount = dataArray.length;

	if (selectedCount == 1) {

		var boxWidth = box.frame().width();
		var boxHeight = box.frame().height();
  	var boxX = box.frame().x();
  	var boxY = box.frame().y();

		// Define width of one column
		var dotOffset = boxWidth / (daysAmount - 1);

		// Find max value in array
		var maxValueInArray = Math.max.apply(Math, dataArray);

		// Find min value in array
		var minValueInArray = Math.min.apply(Math, dataArray);

		// Find delta of values in array
 		var deltaValueInArray = maxValueInArray - minValueInArray

		// Define relevant unit for the box
		var relevantUnit = boxHeight / deltaValueInArray;

  	var dotY = 0;
  	var dotX = 0;

		var endPoint = dataArray.length - 1;

  	var path = NSBezierPath.bezierPath();

		// doc.showMessage(minValueInArray.toString());

    path.moveToPoint(NSMakePoint(0,0));

		for (var i = 0; i < dataArray.length; i++) {
    	dotX = dotOffset * i;
    	dotY =  - (dataArray[i] - minValueInArray) * relevantUnit;
    	if (i == 0) {
    		path.moveToPoint(NSMakePoint(dotX,dotY));
    	}
    	path.lineToPoint(NSMakePoint(dotX,dotY));

			// Create end markpoint
			if (i == endPoint) {

				var ovalShape = MSOvalShape.alloc().init();
				ovalShape.frame = MSRect.rectWithRect(NSMakeRect(0,0,(endPointRadius * 2),(endPointRadius * 2)));

				var shapeGroup = MSShapeGroup.shapeWithPath(ovalShape);
				// Changed layer.style().fills().addNewStylePart() to layer.style().addStylePartOfType(0) for Sketch 3.8
				var fill = shapeGroup.style().addStylePartOfType(0);
				fill.color = makeColor(endPointColor);
				shapeGroup.frame().midX = dotX + boxX;
				shapeGroup.frame().midY = dotY + boxY + boxHeight;

			}

    }

		var shape = MSShapeGroup.shapeWithBezierPath(path);
		// Changed layer.style().borders().addNewStylePart() to style().addStylePartOfType(1) for Sketch 3.8
		var border = shape.style().addStylePartOfType(1);
		border.color = makeColor(strokeColor);
		border.thickness = thickness;

		shape.frame().x = boxX;
		shape.frame().y = boxY;

		// Add graph to current artboard
		doc.currentPage().currentArtboard().addLayers([shape]);
		if (displayEndPoint == true) {
			doc.currentPage().currentArtboard().addLayers([shapeGroup]);
		}

		// Remove initial box
		if (removeInitialBox == true) {
  		doc.currentPage().currentArtboard().removeLayer(box);
		}

	} else {
			doc.showMessage("You should select one rectangle.");
		}
}

function enterData(context) {

	var strokeColor = "#00AAFF"
	var thickness = 1
	var displayEndPoint = true
	var endPointColor = "#DD2020"
	var endPointRadius = 2
	var removeInitialBox = true

	var selectedLayers = context.selection;
	var selectedCount = selectedLayers.count();
	var doc = context.document;

	var dataFromTextFieldArray = doc.askForUserInput_initialValue("Enter your data", "10, 30, 3, 8, 39, 25, 22, 89, 74, 7, 2, 40, 61, 17, 35, 31, 8, 14, 39, 32, 53")

	var dataArray = dataFromTextFieldArray.trim().split(", ").map(Number)

	// Check data a bit
	// @import "checkdata.js"

	// Create sparkline

	var box = selectedLayers[0];
	var daysAmount = dataArray.length;

	if (selectedCount == 1) {

		var boxWidth = box.frame().width();
		var boxHeight = box.frame().height();
  	var boxX = box.frame().x();
  	var boxY = box.frame().y();

		// Define width of one column
		var dotOffset = boxWidth / (daysAmount - 1);

		// Find max value in array
		var maxValueInArray = Math.max.apply(Math, dataArray);

		// Find min value in array
		var minValueInArray = Math.min.apply(Math, dataArray);

		// Find delta of values in array
 		var deltaValueInArray = maxValueInArray - minValueInArray

		// Define relevant unit for the box
		var relevantUnit = boxHeight / deltaValueInArray;

  	var dotY = 0;
  	var dotX = 0;

		var endPoint = dataArray.length - 1;

  	var path = NSBezierPath.bezierPath();

		// doc.showMessage(minValueInArray.toString());

    path.moveToPoint(NSMakePoint(0,0));

		for (var i = 0; i < dataArray.length; i++) {
    	dotX = dotOffset * i;
    	dotY =  - (dataArray[i] - minValueInArray) * relevantUnit;
    	if (i == 0) {
    		path.moveToPoint(NSMakePoint(dotX,dotY));
    	}
    	path.lineToPoint(NSMakePoint(dotX,dotY));

			// Create end markpoint
			if (i == endPoint) {

				var ovalShape = MSOvalShape.alloc().init();
				ovalShape.frame = MSRect.rectWithRect(NSMakeRect(0,0,(endPointRadius * 2),(endPointRadius * 2)));

				var shapeGroup = MSShapeGroup.shapeWithPath(ovalShape);
				// Changed layer.style().fills().addNewStylePart() to layer.style().addStylePartOfType(0) for Sketch 3.8
				var fill = shapeGroup.style().addStylePartOfType(0);
				fill.color = makeColor(endPointColor);
				shapeGroup.frame().midX = dotX + boxX;
				shapeGroup.frame().midY = dotY + boxY + boxHeight;

			}

    }

		var shape = MSShapeGroup.shapeWithBezierPath(path);
		// Changed layer.style().borders().addNewStylePart() to style().addStylePartOfType(1) for Sketch 3.8
		var border = shape.style().addStylePartOfType(1);
		border.color = makeColor(strokeColor);
		border.thickness = thickness;

		shape.frame().x = boxX;
		shape.frame().y = boxY;

		// Add graph to current artboard
		doc.currentPage().currentArtboard().addLayers([shape]);
		if (displayEndPoint == true) {
			doc.currentPage().currentArtboard().addLayers([shapeGroup]);
		}

		// Remove initial box
		if (removeInitialBox == true) {
  		doc.currentPage().currentArtboard().removeLayer(box);
		}

	} else {
			doc.showMessage("You should select one rectangle.");
		}
}
