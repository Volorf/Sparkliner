var someThingWentWrong = 0
var msg = "Wrong data type:"

// Check gata

var checkDataArray = 0
var checkStrokeColor = typeof(strokeColor)
var checkThickness = typeof(thickness)
var checkDisplayEndPoint = typeof(displayEndPoint)
var checkEndPointColor = typeof(endPointColor)
var checkEndPointRadius = typeof(endPointRadius)
var checkRemoveInitialBox = typeof(removeInitialBox)

for ( i = 0; i < dataArray.length; i++) {
  if (typeof(dataArray[i]) != "number") {
    checkDataArray = 1
		msg = msg + " 'dataArray'"
		someThingWentWrong = 1
  }
}

if (checkStrokeColor != "string") {
	msg = msg + " 'strokeColor'"
	someThingWentWrong = 1
}

if (checkThickness != "number") {
	msg = msg + " 'thickness'"
	someThingWentWrong = 1
}

if (checkDisplayEndPoint != "boolean") {
	msg = msg + " 'displayEndPoint'"
	someThingWentWrong = 1
}

if (checkEndPointColor != "string") {
	msg = msg + " 'endPointColor'"
	someThingWentWrong = 1
}

if (checkEndPointRadius != "number") {
	msg = msg + " 'endPointRadius'"
	someThingWentWrong = 1
}

if (checkRemoveInitialBox != "boolean") {
	msg = msg + " 'removeInitialBox'"
	someThingWentWrong = 1
}

if (someThingWentWrong == 1) {
	doc.showMessage(msg)
}
