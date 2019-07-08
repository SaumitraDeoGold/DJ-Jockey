var winHomescreen = null;

exports.createHomescreen = function() {

	if (winHomescreen == null) {

		winHomescreen = Ti.UI.createWindow({
			height : Ti.UI.FILL,
			width : Ti.UI.FILL,
			backgroundColor : 'white',
			top : Ti.Platform.osname == 'android' ? '0dp' : '20dp'
		});

		//----------------------------------------- Event listners-----------------------------

		winHomescreen.addEventListener('androidback', function(e) {
			exports.removeHomescreen();
		});

		//----------------------------------------- Screen UI Code-----------------------------

		var vwHomescreen = Ti.UI.createView({
			height : Ti.UI.FILL,
			width : Ti.UI.FILL,
			backgroundColor : '#363636',
			//layout : 'horizontal'
		});

		winHomescreen.add(vwHomescreen);

		//------------------- Homescreen Header
		var header = Ti.UI.createView({
			top : '0dp',
			height : '62dp',
			width : Ti.UI.FILL,
			//backgroundColor : 'blue'
		});

		header.add(Ti.UI.createImageView({ 
			top : 2,
			image : '/images/header.jpeg',
			height : Ti.UI.FILL,
			left : 8,
			right : 8
		}));

		vwHomescreen.add(header);
		//alert(header.children.length);
		header = null;
		require('library/loader').addLoader(vwHomescreen); 
		//----------------- Homescreen tabs

		var carouselArray = ['/images/cover/2015apr.jpg', '/images/cover/2015aug.jpg', '/images/cover/2015dec.jpg', '/images/cover/2015feb.jpg', '/images/cover/2015oct.jpg', '/images/cover/2016aug.jpg', '/images/cover/2016feb.jpg', '/images/cover/2016jun.jpg', '/images/cover/2017dec.jpg', '/images/cover/2017jun.jpg', '/images/cover/2017oct.jpg', '/images/cover/2018aug.jpg', '/images/cover/2018feb.jpg', '/images/cover/2018jun.jpg', '/images/cover/2018oct.jpg'];
		var carouselArrayApi = [];

		function DisplayCovers(carouselArray) {

			var width = 420 * carouselArray.length;
			console.log("width : " + carouselArray.length*320);

			var vwAbc = Ti.UI.createView({
				top : '0dp',
				//backgroundColor : 'red',
				width : width + 'dp',
				height : '98%', //'500dp',
				name : 'vwAbc',
				//backgroundColor : 'yellow'
			});

			var scrollTab = Ti.UI.createScrollView({
				//layout : 'horizontal',
				height : '90%',
				width : Ti.UI.FILL,
				//backgroundColor : '#d1d1d1',
				scrollType : 'horizontal',
				left : '0dp',
				top : '78dp',
				scrollingEnabled : true,

			});

			var left = 20;

			for (var i = 0; i < carouselArray.length; i++) {

				//creating tab according to number of views

				var vwTab = Ti.UI.createView({
					//backgroundColor : arrViews[i],
					width : '88%',
					layout : 'vertical',
					id : i,
					left : left + 'dp',
					name : 'vwTab',
					borderRadius : 4

				});

				vwTab.add(Ti.UI.createImageView({
					top : 0,
					image : carouselArray[i].img_path,
					height : '90%',
					width : Ti.UI.FILL,
					borderRadius : 4
				}));

				vwTab.add(Ti.UI.createLabel({
					top : 10,
					font : {
						fontSize : '16dp',
						fontWeight : 'bold'
					},
					text : 'February - March 2018',
					color : '#fff',
					touchEnabled : false,
					//backgroundColor:'yellow'
				}));

				vwAbc.add(vwTab);
				left = left + 300;
			}

			scrollTab.add(vwAbc);
			scrollTab.addEventListener('click', function(e) {
				require('InitialScreens/tabs').createTabscreen();
			});

			vwHomescreen.add(scrollTab);
			vwHomescreen = null;

		}

		//Call Cover API...
		LoadCover();

		winHomescreen.open();

		//APi FUNCTION...

		function LoadCover() {
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


				network.getToServer(network.urlGetCover, 60000, eventOnLoad, eventOnError);

			} else {
				//require('common/loader').removeLoader();
				network.NetworkError();

			}

			//..........................................................................................................................................
		}

	}

};

exports.removeHomescreen = function() {

	if (winHomescreen != null) {
		winHomescreen.close();
		winHomescreen = null;
	}

};
