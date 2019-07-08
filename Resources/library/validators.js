var validators = {};
exports.validators = function() {
	return validators;
};

validators.RequiredFieldPickerText = function(lbl) {
	var isValid = true;

	if (lbl.text.trim() === 'Area' || lbl.text.trim() === 'Select' || lbl.text.trim() === '') {
		isValid = false;
	}

	return isValid;

};

validators.RequiredFieldValidatorDropDown = function(pck) {
	var isValid = false;
	if (pck.getSelectedRow(0).title.toString().indexOf('Select') === -1) {
		isValid = true;
	}

	return isValid;
};

validators.RequiredFieldValidatorTextBox = function(txt) {
	var isValid = false;
	if (txt.value !== null) {
		if (txt.value.trim() !== '') {
			isValid = true;
		}
	}
	return isValid;
};

validators.RegularExpressionName = function(txt) {
	var isValid = false;
	var reg = /^[A-Za-z ]+$/g;

	if (txt.value !== '' && txt.value !== null) {
		if (txt.value.trim() !== '') {
			if (!txt.value.match(reg)) {
				isValid = false;

			} else {
				isValid = true;
			}
		}
	} else {

		isValid = false;
	}
	return isValid;
};

validators.RegularExpressionPassword = function(txt) {
	var isValid = false;
	//var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

	if (txt.value !== '' && txt.value !== null && txt.value.length >= 2 && txt.value.length <= 16) {

		//if (txt.value.match(reg)) {
		isValid = true;
		//} else {
		//isValid = false;
		//}
	}

	return isValid;
};

validators.RegularExpressionNumber = function(txt) {

	var isValid = false;

	if (txt.value.trim() !== '' && txt.value !== null) {
		if (isNaN(txt.value) !== true) {
			isValid = true;
		}
	}

	return isValid;
};

validators.RegularExpressionMobileNumber = function(txt) {
	var isValid = false;

	if (isNaN(txt.value) === false && txt.value !== null) {
		if (txt.value.length === 10) {
			if (txt.value.trim() !== '') {
				isValid = true;
			}
		}
	}

	return isValid;
};

validators.InternationalMobileNumber = function(txt) {
	var isValid = false;
	var reg = /^\+(?:[0-9]●?){6,14}[0-9]$/;
	if (!txt.match(reg)) {
		isValid = false;

	} else {
		isValid = true;
	}
	return isValid;
};

validators.RegularExpressionNumberPin = function(txt) {
	var isValid = false;
	var val = txt.value;

	if (val === '' || isNaN(val) || val.length < 6)
		isValid = false;
	else
		isValid = true;

	return isValid;
};

validators.checkpincode = function(val) {

	var isValid = false;

	if (val === '' || isNaN(val) || val.length == 5)

		isValid = false;
	
else

		isValid = true;

	return isValid;

};

validators.CheckForSpecialChars = function(str) {
	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) != -1) {

			return false;
		}
	}
	return true;
};

validators.RegularExpressionWebSideName = function(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
	'(\\#[-a-z\\d_]*)?$', 'i');
	// fragment locater

	if (!pattern.test(str)) {
		return false;
	} else {
		return true;
	}
};

validators.RegularExpressionEmail = function(txt) {
	var isValid = false;
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (txt.value !== '' && txt.value !== null) {

		if (reg.test(txt.value.trim()) === false) {
			isValid = false;

		} else {
			isValid = true;
		}
	} else {
		isValid = false;
	}
	return isValid;
};

validators.RegularExpressionNewsletterEmail = function(txt) {
	var isValid = false;
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (txt.value.trim() !== '') {
		if (reg.test(txt.value) === false) {
			isValid = false;
		} else {
			isValid = true;
		}
	}
	return isValid;
};

validators.RegularExpressionUserName = function(txt) {
	var isValid = false;
	var reg = /^[A-Za-z0-9 ]+$/g;

	if (txt.value !== '' && txt.value.trim() !== '' && txt.value.length >= 2 && txt.value.length <= 16) {
		if(txt.value.indexOf(' ')==-1)
		{
			if (reg.test(txt.value) == false) {
			isValid = false;
		} else {
			isValid = true;
		}
			
		}
		else
		{
			isValid = false;
		}
		
	} else {
		isValid = false;
	}
	return isValid;
};

validators.RegularExpressionBloodGroup = function(txt) {
	var reg = /^(A|B|AB|O|a|b|ab|o)[+-]$/g;
	var isValid = false;
	if (txt.value.match(reg)) {
		isValid = true;
	}
	return isValid;
};

validators.RegularExpressionWeight = function(txt) {

	var isValid = false;

	if (txt.value.trim() !== '' && txt.value !== null) {

		var value = txt.value.replace(/./, '');
		value = value.replace(/ /g, '');

		if (isNaN(value) !== true) {
			isValid = true;
		}
	}

	return isValid;
};
