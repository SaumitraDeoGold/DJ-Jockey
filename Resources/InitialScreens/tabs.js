var winTabscreen = null;

exports.createTabscreen = function() {

	if (winTabscreen == null) {

		var nodataTemplate = {
			properties : {
				height : '500dp', //Ti.UI.FILL,
				width : Ti.UI.FILL,
				//selectionStyle : Ti.Platform.osname !== "android" ? Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE : '',
				backgroundColor : "transparent",
			},
			childTemplates : [{
				type : 'Ti.UI.View',
				bindId : 'rowcontainer',
				properties : {
					top : '6dp',
					height : Ti.UI.FILL,
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					backgroundColor : "#fff",
					//borderRadius : '2dp',
					//borderColor : 'red',
				},
				childTemplates : [{
					type : 'Ti.UI.View',
					bindId : 'vwVertical',
					properties : {
						top : '10dp',
						height : Ti.UI.SIZE,
						width : Ti.UI.SIZE,
						layout : 'vertical'
					},
					childTemplates : [{
						type : 'Ti.UI.Label',
						bindId : 'nodatapic',
						properties : {
							height : '70dp',
							font : {
								fontSize : '50dp',
								fontFamily : require('main').icomoon
							},
							text : '\u2614',
							color : '#000',
							//backgroundColor:'yellow',
						}
					}, {
						type : 'Ti.UI.Label',
						bindId : 'nodatalbl',
						properties : {
							top : '10dp',
							font : {
								fontSize : '26dp',
								//fontFamily : require('main').icomoon
							},
							text : 'Sorry , No data found',
							color : '#cccccc'
						}
					}]
				}]
			}]
		};

		var eventsTemplate = {
			properties : {
				bindId : 'row',
				height : '95dp',
				width : Ti.UI.FILL,
				//selectionStyle : Ti.Platform.osname !== "android" ? Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE : '',
				backgroundColor : "transparent",
			},
			childTemplates : [{
				type : 'Ti.UI.View',
				bindId : 'maincontainer',
				properties : {
					top : '6dp',
					height : '95dp',
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					backgroundColor : "#404040",
					borderRadius : '2dp',
					//borderColor : 'red',
				},
				childTemplates : [{
					type : 'Ti.UI.ImageView',
					bindId : 'hotelimg',
					properties : {
						height : Ti.UI.FILL,
						left : '0dp',
						width : '95dp',
						touchEnabled : true,
						defaultImage : '/images/defhotel.png'
					},
				}, {
					type : 'Ti.UI.Label',
					bindId : 'lblname',
					properties : {
						top : '12dp',
						height : '40dp',
						left : '105dp',
						right : '5dp',
						font : {
							fontSize : '14dp',
							fontWeight : 'bold'
						},
						color : '#fff',
						touchEnabled : true,
						text:"Name"
						//backgroundColor : "#fff",
					},
				}, {
					type : 'Ti.UI.Label',
					bindId : 'lbladdr',
					properties : {
						top : '54dp',
						height : '15dp',
						left : '105dp',
						right : '5dp',
						font : {
							fontSize : '14dp'
						},
						color : '#cb5566',
						touchEnabled : true,
						wordWrap : false,
						ellipsize : true
					},
				}]
			}, {
				type : 'Ti.UI.View',
				bindId : 'maincontainer2',
				properties : {
					top : '108dp',
					height : '95dp',
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					backgroundColor : "#fff",
					borderRadius : '2dp',
					visible : 'false',
				},
				childTemplates : [{
					type : 'Ti.UI.ImageView',
					bindId : 'adbanner',
					properties : {
						height : Ti.UI.FILL,
						left : '0dp',
						right : '0dp',
						touchEnabled : true,
						defaultImage : '/images/BannerAD/adbanner.jpg'
					},
				}]
			}]
		};

		var bannerArray = ["/images/BannerAD/adbanner.jpg", "/images/BannerAD/adbanner2.jpg", "/images/BannerAD/adbanner3.jpg", "/images/BannerAD/adbanner4.jpg"];
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		var eventListTemplate = {
			properties : {
				height : '175dp',
				width : Ti.UI.FILL,
				//selectionStyle : Ti.Platform.osname !== "android" ? Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE : '',
				backgroundColor : "transparent",
			},
			childTemplates : [{
				type : 'Ti.UI.View',
				bindId : 'row',
				properties : {
					top : '6dp',
					height : '175dp',
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					//backgroundColor : "black",
					borderRadius : '2dp',
					//borderColor : 'red',
				},
				childTemplates : [{
					type : 'Ti.UI.ImageView',
					bindId : 'maincontainer',
					properties : {
						top : '0dp',
						height : Ti.UI.FILL,
						width : Ti.UI.FILL,
						left : '0dp',
						right : '0dp',
						image : '/images/post/party1.jpg'
					},
				}, {
					type : 'Ti.UI.View',
					bindId : 'lblview',
					properties : {
						top : '120dp',
						height : Ti.UI.SIZE,
						width : Ti.UI.fILL,
						//backgroundColor : '#73000000',
						touchEnabled : false,
					},
					childTemplates : [{
						type : 'Ti.UI.Label',
						bindId : 'lblname',
						properties : {
							top : '5dp',
							height : Ti.UI.SIZE,
							left : '10dp',
							right : '32dp',
							font : {
								fontSize : '14dp',

							},
							width : '120dp',
							touchEnabled : true,
							color : "#fff",
							//backgroundColor : '#73000000'
						},
					}, {
						type : 'Ti.UI.Label',
						bindId : 'lbladdr',
						properties : {
							top : '24dp',
							height : Ti.UI.SIZE,
							left : '10dp',
							right : '32dp',
							font : {
								fontSize : '14dp',
								fontWeight : 'bold'
							},
							color : "#fff",
							touchEnabled : true,
							backgroundColor : '#73000000'
						},
					}]
				}]
			}, {
				type : 'Ti.UI.View',
				bindId : 'maincontainer2',
				properties : {
					top : '188dp',
					height : '175dp',
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					backgroundColor : "#fff",
					borderRadius : '2dp',
					visible : 'false',
				},
				childTemplates : [{
					type : 'Ti.UI.ImageView',
					bindId : 'adbanner',
					properties : {
						height : Ti.UI.FILL,
						left : '0dp',
						right : '0dp',
						touchEnabled : true,
						defaultImage : '/images/BannerAD/adbanner.jpg'
					},
				}]
			}]
		};

		var listTwo = {
			properties : {
				height : '95dp',
				width : Ti.UI.FILL,
				//selectionStyle : Ti.Platform.osname !== "android" ? Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE : '',
				backgroundColor : "transparent",
			},
			childTemplates : [{
				type : 'Ti.UI.View',
				bindId : 'maincontainer',
				properties : {
					top : '6dp',
					height : '95dp',
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					backgroundColor : "#404040",
					borderRadius : '2dp',
					//borderColor : 'red',
				},
				childTemplates : [{
					type : 'Ti.UI.ImageView',
					bindId : 'hotelimg',
					properties : {
						height : Ti.UI.FILL,
						left : '0dp',
						width : '95dp',
						touchEnabed : true,
						defaultImage : '/images/defhotel.png'
					},
				}, {
					type : 'Ti.UI.Label',
					bindId : 'lblname',
					properties : {
						top : '10dp',
						height : Ti.UI.SIZE,
						left : '105dp',
						right : '5dp',
						font : {
							fontSize : '14dp',
							fontWeight : 'bold'
						},
						color : '#fff',
						touchEnabled : true,
						text:"Name..."
					},
				}, {
					type : 'Ti.UI.Label',
					bindId : 'lblcompany',
					properties : {
						top : '33dp',
						height : '18dp',
						left : '105dp',
						right : '5dp',
						font : {
							fontSize : '14dp'
						},
						color : '#fff',
						touchEnabled : true,
						wordWrap : false,
						ellipsize : true
					},
				}, {
					type : 'Ti.UI.Label',
					bindId : 'lbladdr',
					properties : {
						top : '56dp',
						height : '15dp',
						left : '105dp',
						right : '5dp',
						font : {
							fontSize : '14dp'
						},
						color : '#cb5566',
						touchEnabled : true,
						wordWrap : false,
						ellipsize : true
					},
				}]
			}, {
				type : 'Ti.UI.View',
				bindId : 'maincontainer2',
				properties : {
					top : '108dp',
					height : '95dp',
					left : '7dp',
					right : '7dp',
					touchEnabled : true,
					backgroundColor : "#fff",
					borderRadius : '2dp',
					visible : 'false',
				},
				childTemplates : [{
					type : 'Ti.UI.ImageView',
					bindId : 'adbanner',
					properties : {
						height : Ti.UI.FILL,
						left : '0dp',
						right : '0dp',
						touchEnabled : true,
						defaultImage : '/images/BannerAD/adbanner.jpg'
					},
				}]
			}]
		};

		var winTabscreen = Titanium.UI.createWindow({
			backgroundColor : 'black',
			fullscreen : false
		});

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
			left : 10,
			right : 10
		}));
		winTabscreen.add(header);

		var listheader = Ti.UI.createView({
			top : '66dp',
			height : '40dp',
			left : 10,
			right : 10,
			backgroundColor : 'white'
		});

		listheader.add(Ti.UI.createLabel({
			top : 10,
			font : {
				fontSize : '16dp',
				fontWeight : 'bold'
			},
			text : 'Latest News Section - January 2019',
			color : 'red',
			touchEnabled : false,
			textAlign : Titanium.UI.TEXT_ALIGNMENT_LEFT
		}));

		winTabscreen.add(listheader);
		winTabscreen.open();
		require('library/loader').addLoader(winTabscreen);
		//List View One...
		var newsSection = Ti.UI.createListSection({
		});
		var listvwNews = Ti.UI.createListView({
			left : '0dp',
			right : '0dp',
			height : Ti.UI.SIZE,
			templates : {
				'eventsTemplate' : eventsTemplate,
				'nodataTemplate' : nodataTemplate
			},
			backgroundColor : 'transparent',
			top : '0dp',
			canScroll : true,
			defaultItemTemplate : 'eventsTemplate',
			separatorColor : 'transparent',
			//footerView : vwViewAllEvents,
			//separatorStyle : (Ti.Platform.osname != 'android') ? Titanium.UI.iPhone.ListViewSeparatorStyle.NONE : '',
			showVerticalScrollIndicator : false
		});

		LoadNews(listvwNews, newsSection);

		var dataSet = [];
		listvwNews.addEventListener('itemclick', function(e) {
			require('InitialScreens/news').createNewsscreen();
		});

		//List View Product...
		var listvwProducts = Ti.UI.createListView({
			left : '0dp',
			right : '0dp',
			height : Ti.UI.SIZE,
			templates : {
				'listTwo' : listTwo,
				'nodataTemplate' : nodataTemplate
			},
			backgroundColor : 'transparent',
			top : '0dp',
			canScroll : true,
			defaultItemTemplate : 'eventsTemplate',
			separatorColor : 'transparent',
			//footerView : vwViewAllEvents,
			//separatorStyle : (Ti.Platform.osname != 'android') ? Titanium.UI.iPhone.ListViewSeparatorStyle.NONE : '',
			showVerticalScrollIndicator : false
		});

		var productData = [];
		var productSection = Ti.UI.createListSection({
		});

		LoadProducts(listvwProducts, productSection);

		listvwProducts.addEventListener('itemclick', function(e) {
			require('InitialScreens/news').createNewsscreen();
		});

		//-------Views to hold content-------
		var postSection = Ti.UI.createListSection({
		});

		var listvwPost = Ti.UI.createListView({
			left : '0dp',
			right : '0dp',
			height : Ti.UI.SIZE,
			templates : {
				'eventListTemplate' : eventListTemplate,
				'nodataTemplate' : nodataTemplate
			},
			backgroundColor : 'transparent',
			top : '0dp',
			canScroll : true,
			defaultItemTemplate : 'eventsTemplate',
			separatorColor : 'transparent',
			//footerView : vwViewAllEvents,
			//separatorStyle : (Ti.Platform.osname != 'android') ? Titanium.UI.iPhone.ListViewSeparatorStyle.NONE : '',
			showVerticalScrollIndicator : false
		});
		var postData = [];
		LoadPosts(listvwPost, postSection);
		
		listvwPost.addEventListener('itemclick', function(e) {
			
			var item = listvwPost.sections[e.sectionIndex].getItemAt(e.itemIndex); 
			require('InitialScreens/news').createNewsscreen("posts",item.maincontainer.postid);
		});		
		
		
		var winView1 = Ti.UI.createView({
			top : '104dp',
			bottom : '47dp',
			backgroundColor : 'black'
		});

		var winView2 = Ti.UI.createView({
			top : '104dp',
			bottom : '47dp',
			backgroundColor : 'black'
		});
		var winView3 = Ti.UI.createView({
			top : '104dp',
			bottom : '47dp',
			backgroundColor : 'black'
		});
		var winView4 = Ti.UI.createView({
			top : '104dp',
			bottom : '47dp',
			backgroundColor : 'black'
		});
		var winView5 = Ti.UI.createView({
			top : '104dp',
			bottom : '47dp',
			backgroundColor : 'black'
		});

		winView1.add(listvwNews);
		winView2.add(Ti.UI.createImageView({
			top : 0,
			image : '/images/pdf.jpg',
			height : Ti.UI.FILL,
			left : '5dp',
			right : '5dp',
			borderRadius : 4
		}));
		//winView3.add(listvwDine3);
		winView4.add(listvwProducts);

		winView5.add(listvwPost);

		//Tab container holds the custom tabgroup

		var tabContainer = Ti.UI.createView({
			bottom : 0,
			height : '40dp',
			width : Ti.UI.FILL,
			layout : 'horizontal'

		});

		//----The custom tabs-----
		//they can also be defined with a background image
		//property which will give them a more professional style, look and feel

		var tab1 = Ti.UI.createView({
			left : 0,
			backgroundColor : '#fff',
			height : Ti.UI.FILL,
			width : '20%'
		});

		var tab2 = Ti.UI.createView({
			left : 0,
			backgroundColor : '#fff',
			height : Ti.UI.FILL,
			width : '20%'
		});

		var tab3 = Ti.UI.createView({
			left : 0,
			backgroundColor : '#fff',
			height : Ti.UI.FILL,
			width : '20%'
		});

		var tab4 = Ti.UI.createView({
			left : 0,
			backgroundColor : '#fff',
			height : Ti.UI.FILL,
			width : '20%'
		});

		var tab5 = Ti.UI.createView({
			left : 0,
			backgroundColor : '#fff',
			height : Ti.UI.FILL,
			width : '20%'
		});

		//Labels describing each custom tab view

		var label1 = Ti.UI.createImageView({
			image : '/images/search.png',
			height : '26dp',
			width : '26dp'
		});

		var label2 = Ti.UI.createImageView({
			image : '/images/news.png',
			height : '26dp',
			width : '26dp'
		});

		var label3 = Ti.UI.createImageView({
			image : '/images/home.png',
			height : '26dp',
			width : '26dp'
		});

		var label4 = Ti.UI.createImageView({
			image : '/images/bell.png',
			height : '26dp',
			width : '26dp'
		});

		var label5 = Ti.UI.createImageView({
			image : '/images/user.png',
			height : '26dp',
			width : '26dp'
		});

		//adding the labels to tabs and the tabs to the container
		tab1.add(label1);
		tab2.add(label2);
		tab3.add(label3);
		tab4.add(label4);
		tab5.add(label5);

		winTabscreen.add(tabContainer);

		tabContainer.add(tab1);
		tabContainer.add(tab2);
		tabContainer.add(tab3);
		tabContainer.add(tab4);
		tabContainer.add(tab5);

		winTabscreen.add(winView1);

		winTabscreen.add(winView2);
		winView2.hide();

		winTabscreen.add(winView3);
		winView3.hide();

		winTabscreen.add(winView4);
		winView4.hide();

		winTabscreen.add(winView5);
		winView5.hide();

		//----------------Tab Event Listeners------------

		tab1.addEventListener('click', function(e) {
			listheader.children[0].text = "Latest News Section - JANUARY 2019";
			winView2.hide();
			winView3.hide();
			winView4.hide();
			winView1.show();
			winView5.hide();
		});

		tab2.addEventListener('click', function(e) {
			listheader.children[0].text = "PDF Section";
			winView1.hide();
			winView3.hide();
			winView4.hide();
			winView2.show();
			winView5.hide();
		});

		tab3.addEventListener('click', function(e) {
			listheader.children[0].text = "Latest News Section - JANUARY 2019";
			winTabscreen.close();
			winTabscreen = null;
		});

		tab4.addEventListener('click', function(e) {
			listheader.children[0].text = "LATEST PRODUCTS";
			winView1.hide();
			winView2.hide();
			winView3.hide();
			winView4.show();

			winView5.hide();
		});

		tab5.addEventListener('click', function(e) {
			listheader.children[0].text = "Cover Stories - House of Progression";
			winView1.hide();
			winView2.hide();
			winView3.hide();
			winView4.hide();
			winView5.show();
		});

		//API FUNCS...

		function LoadNews(listview, listsection) {
			//.......................................................LoadNews API...............................................................
			var network = require('library/networklayer').networkFact();
			var response = null;
			//require('common/loader').createLoader(vwBtnSubmit, 10, null, winEvent);

			if (Titanium.Network.networkType !== Titanium.Network.NETWORK_NONE) {

				var parameters = {
					pkey : network.funKey
				};

				Ti.API.info('Parameters for Loadevents: ' + (JSON.stringify(parameters)));
				function eventOnLoad(f) {

					response = JSON.parse(this.responseText);

					if (response != null && response != undefined) {
						Ti.API.info('Case IN : ' + response.status);
						if (response.status == 1) {
							for ( z = 0; z < response.link_list.length; z++) {

								//Extrra Calc's...
								var getDate = response.link_list[z].flddDate;
								var tdate = getDate.split(" ");
								var displayDate = tdate[0].split("-");
								//Ti.API.info('Date : ' + displayDate);
								//Fill LisTAIndex...
								dataSet.push({
									template : 'eventsTemplate',
									properties : {
										height : ((z + 1) % 5 == 0) ? '195dp' : '95dp'
									},
									maincontainer2 : {
										visible : ((z + 1) % 5 == 0) ? 'true' : 'false'
									},
									hotelimg : {
										image : "http://discjockeymag.in/news/" + response.link_list[z].fldvImage
									},
									lblname : {
										text : response.link_list[z].fldvNTitle,
										//hotelid : response.list[z]._id
									},
									lbladdr : {
										text : displayDate[2] + " - " + monthNames[displayDate[1]] + " - " + displayDate[0],
									},
									adbanner : {
										image : "http://discjockeymag.in/news/" + response.link_list[z].fldvImaget
									}
								});
								//Ti.API.info('Image URL : ' + "http://discjockeymag.in/product/" + response.link_list[z].fldvImage);
							}
							listsection.setItems(dataSet);
							listview.setSections([listsection]);
							Ti.API.info('List Filled');
						}
						require('library/loader').removeLoader();
					}
				}

				function eventOnError(e) {
					Ti.API.info('ERROR 1 : ');
					require('library/loader').removeLoader();
					network.NetworkError();

				}


				network.getToServer(network.urlNews, 60000, eventOnLoad, eventOnError);

			} else {
				Ti.API.info('ERROR 2 : ');
				require('library/loader').removeLoader();
				network.NetworkError();

			}

			//..........................................................................................................................................
		}

		function LoadProducts(listView, listSection) {
			//.......................................................LoadNews API...............................................................
			var network = require('library/networklayer').networkFact();
			var response = null;
			//require('common/loader').createLoader(vwBtnSubmit, 10, null, winEvent);

			if (Titanium.Network.networkType !== Titanium.Network.NETWORK_NONE) {

				function productOnLoad(f) {

					response = JSON.parse(this.responseText);

					if (response != null && response != undefined) {
						Ti.API.info('Case IN : ' + response.status);
						if (response.status == 1) {
							for ( z = 0; z < response.link_list.length; z++) {

								//Extrra Calc's...
								var getDate = response.link_list[z].flddDate;
								//var tdate = getDate.split(" ");
								var displayDate = getDate.split("-");
								Ti.API.info('Date : ' + displayDate);
								//Fill LisTAIndex...
								productData.push({
									template : 'listTwo',
									properties : {
										height : ((z + 1) % 5 == 0) ? '195dp' : '95dp'
									},
									maincontainer2 : {
										visible : ((z + 1) % 5 == 0) ? 'true' : 'false'
									},
									hotelimg : {
										image : "http://discjockeymag.in/product/" + response.link_list[z].fldvImgThumb
									},
									lblname : {
										text : response.link_list[z].fldvProdTitle,
										//hotelid : response.list[z]._id
									},
									lbladdr : {
										text : displayDate[2] + " - " + monthNames[displayDate[1].split("0")[1]] + " - " + displayDate[0],
									},
									adbanner : {
										image : "http://discjockeymag.in/news/" + response.link_list[z].fldvImaget
									}
								});
								//Ti.API.info('Image URL : ' + "http://discjockeymag.in/product/" + response.link_list[z].fldvImage);
							}
							listSection.setItems(productData);
							listView.setSections([listSection]);
							Ti.API.info('List Filled');
							require('library/loader').removeLoader();
						}
					}
				}

				function productOnError(e) {
					Ti.API.info('ERROR 1 : ');
					require('library/loader').removeLoader();
					network.NetworkError();

				}


				network.getToServer(network.urlProducts, 60000, productOnLoad, productOnError);

			} else {
				Ti.API.info('ERROR 2 : ');
				require('library/loader').removeLoader();
				network.NetworkError();

			}

			//..........................................................................................................................................
		}

		function LoadPosts(listView, listSection) {
			//.......................................................LoadNews API...............................................................
			var network = require('library/networklayer').networkFact();
			var response = null;
			//require('common/loader').createLoader(vwBtnSubmit, 10, null, winEvent);

			if (Titanium.Network.networkType !== Titanium.Network.NETWORK_NONE) {

				function postOnLoad(f) {

					response = JSON.parse(this.responseText);

					if (response != null && response != undefined) {
						Ti.API.info('Case IN : ' + response.status);
						if (response.status == 1) {
							for ( z = 0; z < response.link_list.length; z++) {

								//Extrra Calc's...
								var getDate = response.link_list[z].flddDate;
								var tdate = getDate.split(" ");
								var displayDate = tdate[0].split("-");
								Ti.API.info('Date : ' + displayDate);
								//Fill LisTAIndex...
								postData.push({
									template : 'eventListTemplate',   
									properties : {
										height : ((z + 1) % 3 == 0) ? '355dp' : '175dp'
									},
									maincontainer2 : {
										visible : ((z + 1) % 3 == 0) ? 'true' : 'false',
										
									},
									maincontainer : {
										image : response.link_list[z].img_path,
										postid : response.link_list[z].fldiCatId
									},
									hotelimg : {
										visible : false
										
									},
									lbladdr : {
										text : response.link_list[z].fldvPageTitle
										
									},
									adbanner : {
										image : "http://discjockeymag.in/news/" + response.link_list[z].fldvImaget
									}
								});
								//Ti.API.info('Image URL : ' + "http://discjockeymag.in/product/" + response.link_list[z].fldvImage);
							}
							listSection.setItems(postData);
							listView.setSections([listSection]);
							Ti.API.info('List Filled');
							require('library/loader').removeLoader();
						}
					}
				}

				function postOnError(e) {
					Ti.API.info('ERROR 1 : ');
					require('library/loader').removeLoader();
					network.NetworkError();

				}


				network.getToServer(network.urlPost, 60000, postOnLoad, postOnError);

			} else {
				Ti.API.info('ERROR 2 : ');
				require('library/loader').removeLoader();
				network.NetworkError();

			}

			//..........................................................................................................................................
		}

	}

};

exports.removeTabscreen = function() {

	if (winTabscreen != null) {
		winTabscreen.close();
		winTabscreen = null;
	}

};
