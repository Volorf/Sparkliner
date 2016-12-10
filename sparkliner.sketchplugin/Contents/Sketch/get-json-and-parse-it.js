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

var options = {
  dataArray: data.dataArray,
  strokeColor: data.strokeColor,
  thickness: data.thickness,
  displayEndPoint: data.displayEndPoint,
  endPointColor: data.endPointColor,
  endPointRadius: data.endPointRadius,
  removeInitialBox: data.removeInitialBox
}
