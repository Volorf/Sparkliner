# Sparkliner — easy way to make sparkline graph

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
- Create artboard;
- Create a start rectangle. It sets sizes of a future sparkline graph.
- Start command from menu or press shortcuts ctrl + shift + s
- Get result.
