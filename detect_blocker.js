function DetectBlocker() {
    var oWin = window.open("","detectblocker","width=100,height=100,top=5000,left=5000");
    if (oWin==null || typeof(oWin)=="undefined") {
        alert("popup blocked!");
        return True;
    } else {
        alert("popup not blocked!");
        oWin.close();
        return false;
    }
}
	
