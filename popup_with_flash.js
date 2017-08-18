Import flash.external.ExternalInterface;
Function myFunc() :Void
var url:String = "http://192.168.0.10/demos/butcher/index.html";
var windowName: String = "mywindow";
var windowOptions:String = "width:800,height:800";
ExternalInterface.call("window.open", url, windowName, windowOptions);

