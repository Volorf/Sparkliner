# Sparkliner — easy way to make sparkline graph
A sparkline is a very small line chart. Basicaly it doesn't have any axes or coordinates. It presents the general shape of the variation (typically over time) in some measurement, such as temperature or stock market price, in a simple and highly condensed way. [Learn more here](https://en.wikipedia.org/wiki/Sparkline).

## What will you get
![Sparkline is ready](/sparkline-example.png)

## How install the plugin
1. [Download the zip file with the Sparkliner](https://github.com/Volorf/Sparkliner/archive/master.zip)
2. Copy the contents to the plugin folder.

## What do you need first
Sparkliner creates graph with JSON data. First your need have it. It looks like that:

``` json
{
  "dataArray": [10, 30, 3, 8, 39, 25, 22],
  "strokeColor": "#00AAFF",
  "thickness": 1,
  "displayEndPoint": true,
  "endPointColor": "#DD2020",
  "endPointRadius": 2,
  "removeInitialBox": true
}
```

The data is in file called example.json (in the plugin folder).

``` "dataArray" ```
It's that what we will make a sparkline. Data is int's array. Only numbers.

``` "strokeColor" ```
Color of sparkline. You need to write HEX color here. Don't forget about "quotes".

``` "thickness" ```
Thickness of line. Only one number.

``` "displayEndPoint" ```
If you it equel true sparkline is made with a end marker. It it equel false that is not.

``` "endPointColor" ```
Color of end marker. It need a HEX.

``` "endPointRadius" ```
Radius of end marker. Only one number.

``` "removeInitialBox" ```
It is start rectangle who set sizes of sparkline graph. By default plugin removes it. If need it you can set false.

##How does it work
1. Create artboard;
2. Create a start rectangle. It sets sizes of a future sparkline graph.
3. Start command from menu or press shortcuts ctrl + shift + s
4. Get result.
