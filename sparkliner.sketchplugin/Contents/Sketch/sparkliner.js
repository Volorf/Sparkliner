@import "get-json-and-parse-it.js"


function createGraph(context) {


var selectedLayers = context.selection;
var selectedCount = selectedLayers.count();
var doc = context.document;


// Check data a bit

@import "checkdata.js"

// Create sparkline

var box = selectedLayers[0]
var daysAmount = dataArray.length;

var path = NSBezierPath.bezierPath();


if (selectedCount == 1) {

	var boxWidth = box.frame().width()
	var boxHeight = box.frame().height()
  var boxX = box.frame().x()
  var boxY = box.frame().y()

	// Define width of one column
	var dotOffset = boxWidth / (daysAmount - 1)

	// Find max value in array
	var maxValueInArray = Math.max.apply(Math, dataArray)

	// Define relevant unit for the box
	var relevantUnit = boxHeight / maxValueInArray

  var dotY = 0
  var dotX = 0

	var endPoint = dataArray.length - 1

  var path = NSBezierPath.bezierPath();

    path.moveToPoint(NSMakePoint(0,0))

	 for (var i = 0; i < dataArray.length; i++) {
     dotX = dotOffset * i
     dotY = boxHeight - dataArray[i] * relevantUnit
     if (i == 0) {
       path.moveToPoint(NSMakePoint(dotX,dotY));
     }
     path.lineToPoint(NSMakePoint(dotX,dotY));

		 // Create end markpoint
		 	if (i == endPoint) {

			 var ovalShape = MSOvalShape.alloc().init();
			 ovalShape.frame = MSRect.rectWithRect(NSMakeRect(0,0,(endPointRadius * 2),(endPointRadius * 2)));

			 var shapeGroup = MSShapeGroup.shapeWithPath(ovalShape);
			 var fill = shapeGroup.style().fills().addNewStylePart();
			 fill.color = MSColor.colorWithSVGString(endPointColor);
			 shapeGroup.frame().midX = dotX + boxX
			 shapeGroup.frame().midY = dotY + boxY

		 	}

    }

  // path.closePath();

  var shape = MSShapeGroup.shapeWithBezierPath(path);
  var border = shape.style().borders().addNewStylePart();
  border.color = MSColor.colorWithSVGString(strokeColor);
  border.thickness = thickness

	shape.frame().x = boxX
	shape.frame().y = boxY

  // Add graph to current artboard
  doc.currentPage().currentArtboard().addLayers([shape]);
	if (displayEndPoint == true) {
		doc.currentPage().currentArtboard().addLayers([shapeGroup]);
	}

  // Remove initial box
  if (removeInitialBox == true) {
    doc.currentPage().currentArtboard().removeLayer(box)
  }

} else {
	var doc = context.document
  doc.showMessage("You should select one rectangle.")
}

}
