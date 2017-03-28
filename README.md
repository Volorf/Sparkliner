# Sparkliner — easy way to make sparkline graph
> A sparkline is a very small line chart, typically drawn without axes or coordinates. It presents the general shape of the variation (typically over time) in some measurement, such as temperature or stock market price, in a simple and highly condensed way.
> - [Wikipedia](https://en.wikipedia.org/wiki/Sparkline).

## How it works
![Gif more than thousand words](/how-to.gif)

## Installation
1. [Download the zip file with the Sparkliner](https://github.com/Volorf/Sparkliner/archive/master.zip).
2. Double click on Sketch `sparkliner.sketchplugin`.

## Usage
1. **Create an artboard**;
2. Create a start rectangle. It sets sizes of a future sparkline graph;
3. Select a command from menu or press a shortcut;
4. Enter/import your data;
5. Get a sparkline.

## Ways to create a sparkline
### Random
#### One
#### Two
#### Three
#### Four
### Enter data
### Import JSON

## How to use JSON
A Sparkliner can create a graph with JSON data. At the first, your need to have it.

### How it looks

``` json
{
  "dataArray": [10, 30, 3, 8, 39, 25, 22, 89, 74, 7, 2, 40, 61, 17, 35, 31, 8, 14, 39, 32, 53],
  "strokeColor": "#00AAFF",
  "thickness": 1,
  "displayEndPoint": true,
  "endPointColor": "#DD2020",
  "endPointRadius": 2,
  "removeInitialBox": true
}
```
Open the file in your favorite editor and change the values of the names how you need (e.g. `"strokeColor" ` is a name. `"#00AAFF"` is its a value. Together they are a pair). Or create new one.

### What they are

``` "dataArray" ```
Data is an array. It defines a graph curve. Only numbers.

``` "strokeColor" ```
Color of sparkline. You need to write HEX color here. Don't forget about "quotes".

``` "thickness" ```
Thickness of line. Only one number.

``` "displayEndPoint" ```
If it equals true sparkline is made with an end marker. If it equals false - it is not.

``` "endPointColor" ```
Color of end marker. It needs a HEX.

``` "endPointRadius" ```
Radius of end marker. Only one number.

``` "removeInitialBox" ```
It is start rectangle that set sizes of sparkline graph. By default plugin removes it. If you need it you can set false.
