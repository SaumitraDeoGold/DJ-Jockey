var vwTransparent = null;
exports.addLoader = function(view, from) {
	vwTransparent = Ti.UI.createView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		backgroundColor : "#000",
		zIndex : 100
	});
	view.add(vwTransparent);

	var activityind = Ti.UI.createActivityIndicator({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		style : (from == undefined) ? Titanium.UI.ActivityIndicatorStyle.BIG_DARK : Titanium.UI.ActivityIndicatorStyle.PLAIN
	});
	activityind.show();
	vwTransparent.add(activityind);

};
exports.removeLoader = function() {
	if (vwTransparent !== null) {
		vwTransparent.parent.remove(vwTransparent); 
	}
};
