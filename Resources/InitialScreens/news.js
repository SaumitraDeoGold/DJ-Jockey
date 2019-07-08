var winNewsscreen = null;

exports.createNewsscreen = function(method,catID) {

	if (winNewsscreen == null) {

		winNewsscreen = Ti.UI.createWindow({
			height : Ti.UI.FILL,
			width : Ti.UI.FILL,
			backgroundColor : 'white',
			top : Ti.Platform.osname == 'android' ? '0dp' : '20dp'
		});

		//----------------------------------------- Event listners-----------------------------

		winNewsscreen.addEventListener('androidback', function(e) {
			exports.removeNewsscreen();
		});

		Ti.API.info('Parameters for NEWS: ' + (method));

		//----------------------------------------- Screen UI Code-----------------------------

		var vwHomescreen = Ti.UI.createView({
			height : Ti.UI.FILL,
			width : Ti.UI.FILL,
			backgroundColor : 'white',
			//layout : 'horizontal'
		});

		winNewsscreen.add(vwHomescreen);

		//------------------- Homescreen Header
		var header = Ti.UI.createView({
			top : '0dp',
			height : '62dp',
			width : Ti.UI.FILL,
			backgroundColor : '#000'
		});
		
		header.add(Ti.UI.createImageView({
				top : 2,
				image : '/images/header.jpeg',
				height : Ti.UI.FILL,
				left : 8,
				right : 8
			}));
			vwHomescreen.add(header);
			
			var listheader = Ti.UI.createView({
				top : '66dp',
				height : Ti.UI.FILL,
				left:10,
				right:10,
				backgroundColor : 'white'
			});
			
			listheader.add(Ti.UI.createLabel({
				top:10,
				left:10,
				right:10,
				font : {
					fontSize : '15dp',
					fontWeight : 'bold'
				},
				text : 'SUNSET SOUND OFF: POR DO SOL ASHVEM - MORJIM GOA',
				color : 'black',
				touchEnabled : false,
			}));
			
			listheader.add(Ti.UI.createLabel({
				top:60,
				left:10,
				font : {
					fontSize : '14dp',
					//fontWeight : 'bold'
				},
				text : 'Posted By',
				color : 'red',
				touchEnabled : false,
			}));
			
			listheader.add(Ti.UI.createLabel({
				top:60,
				right:10,
				font : {
					fontSize : '14dp',
					//fontWeight : 'bold'
				},
				text : '25th Feb 2018',
				color : 'red',
				touchEnabled : false,
			}));
			
			listheader.add(Ti.UI.createLabel({
				top:100,
				left:10,
				right:10,
				font : {
					fontSize : '13dp',
					//fontWeight : 'bold'
				},
				text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				color : 'black',
				touchEnabled : false,
			}));
			
			listheader.add(Ti.UI.createLabel({
				top:200,
				left:10,
				right:10,
				font : {
					fontSize : '13dp',
					//fontWeight : 'bold'
				},
				text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				color : 'black',
				touchEnabled : false,
			}));
			
			listheader.add(Ti.UI.createLabel({
				top:300,
				left:10,
				right:10,
				font : {
					fontSize : '13dp',
					//fontWeight : 'bold'
				},
				text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
				color : 'black',
				touchEnabled : false,
			}));
			
			vwHomescreen.add(listheader);

		vwHomescreen.add(header);
		//alert(header.children.length);
		header = null;

		

		winNewsscreen.open();
		
		function LoadDetails() {
			//.......................................................Loadevents API...............................................................
			var network = require('library/networklayer').networkFact();
			var response = null;
			//require('common/loader').createLoader(vwBtnSubmit, 10, null, winEvent);
			if (Titanium.Network.networkType !== Titanium.Network.NETWORK_NONE) {

				function eventOnLoad(f) {

					response = JSON.parse(this.responseText);

					Ti.API.info('LoadCovers : ------>>>' + JSON.stringify(response));

					if (response != null && response != undefined) {
						switch(response.status) {
						case "0":
							require('library/loader').removeLoader();
							Ti.UI.createAlertDialog({
								message : "We have a server problem!!!",
								ok : 'OK'
							}).show();
							break;
						case "1":
							DisplayCovers(response.link_list);
							require('library/loader').removeLoader();
							break;

						case "5":
							require('library/loader').removeLoader();
							Ti.UI.createAlertDialog({
								message : "Invalid Pkey",
								ok : 'OK'
							}).show();
							break;

						}

					}
				}

				function eventOnError(e) {
					//require('common/loader').removeLoader();
					network.NetworkError();

				}


				network.getToServer(network.urlGetDetails + 'api_method='+ method + '&fldiCatId=' + catID, 60000, eventOnLoad, eventOnError);

			} else {
				//require('common/loader').removeLoader();
				network.NetworkError();

			}

			//..........................................................................................................................................
		}


	}

};

exports.removeNewsscreen = function() {

	if (winNewsscreen != null) {
		winNewsscreen.close();
		winNewsscreen = null;
	}

};
