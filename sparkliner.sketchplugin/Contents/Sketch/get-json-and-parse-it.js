var openPanel = NSOpenPanel.openPanel()

    openPanel.setTitle('Import JSON')
    openPanel.setMessage('Select a JSON file.')
    openPanel.setPrompt('Import')

var openPanelButtonPressed = openPanel.runModal()

if (openPanelButtonPressed == NSFileHandlingPanelOKButton) {
      var allowedUrl = openPanel.URL()
    }

var filePath = allowedUrl

var data = JSON.parse(NSString.stringWithContentsOfFile(filePath))

var dataArray = data.dataArray
var strokeColor = data.strokeColor
var thickness = data.thickness
var displayEndPoint = data.displayEndPoint
var endPointColor = data.endPointColor
var endPointRadius = data.endPointRadius
var removeInitialBox = data.removeInitialBox
