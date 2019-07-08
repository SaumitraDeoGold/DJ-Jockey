var networkFactory = {};
networkFactory.xhr = null;
networkFactory.funKey = 'DjJockey';
var IPAddress = 'http://discjockeymag.in/android/index.php?api_token=9FJdmk9huvV5LDx&';

//DjJockey Test API's...
networkFactory.urlNews = IPAddress + 'api_method=news';
networkFactory.urlProducts = IPAddress + 'api_method=products';
networkFactory.urlPost = IPAddress + 'api_method=posts';
networkFactory.urlGetCover = IPAddress + 'api_method=cover';
networkFactory.urlcreateevent = 'http://' + IPAddress + '/UserRegister/AddEvent';
networkFactory.urlGetDetails = IPAddress;

networkFactory.PostToServer = function(url, timeout, parameters, fnload, fnerror) {
	//Ti.API.info(url+".."+JSON.stringify(parameters));
	networkFactory.xhr = Ti.Network.createHTTPClient();
	networkFactory.xhr.setTimeout = timeout;

	networkFactory.xhr.onerror = fnerror;
	networkFactory.xhr.onload = fnload;
	/*if (fnreadystate !== undefined) {
	networkFactory.xhr.ondatastream = fnreadystate;
	}*/ 
	networkFactory.xhr.open('POST', url);
	networkFactory.xhr.send(parameters);
};

networkFactory.getToServer = function(url, timeout, fnload, fnerror) {
	//Ti.API.info("current url is"+url);
	networkFactory.xhr = Ti.Network.createHTTPClient();
	networkFactory.xhr.setTimeout = timeout;

	networkFactory.xhr.onerror = fnerror;
	networkFactory.xhr.onload = fnload;

	networkFactory.xhr.open('GET', url);
	networkFactory.xhr.send();
};

networkFactory.NetworkError = function() {
	if (!Ti.Network.online) {
		Ti.UI.createAlertDialog({
			title : 'DjJockey requires an internet connection to function fully', 
			message : "We have network problem",
			buttonNames : ["OK"]
		}).show();
	} else {
		Ti.UI.createAlertDialog({
			title : 'Difficulties in reaching the server', 
			message : "We have a server problem.",
			buttonNames : ["OK"]
		}).show();
	}
};

networkFactory.NetworkErrorAlternate = function(i) {
	if (!Ti.Network.online) {
		Ti.UI.createAlertDialog({
			title : 'DjJockey requires an internet connection to function fully',
			message : '"We have network problem"',
			buttonNames : ["OK"]
		}).show();
	} else {
		Ti.UI.createAlertDialog({
			title : 'Difficulties in reaching the server',
			message : '"We have network problem"',
			buttonNames : ["OK"]
		}).show();
	}
};

exports.networkFact = function() { 
	return networkFactory;
};
