@import "defaults.js"

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
@import "generateSparkline.js"

/*
 * Create a sparkline from JSON
 * @method createWithJson
 * @param  {Object} context
 */
@import "createWithJson.js"

/*
 * Create a sparkline from user-inputted data
 * @method enterData
 * @param  {Object} context
 */
 @import "enterData.js"

/*
 * Create a sparkline from random data
 * @method randomData
 * @param  {Object} context
 */
@import "randomData.js"

/*
 * Create a sparkline from random data
 * @method randomData
 * @param  {Object} context
 */
@import "randomDataN.js"
