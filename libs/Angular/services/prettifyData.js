
/**
* PrettifyData
* --Reusable Service--
* Independent of other services
*
* Useful for extending with other classes to neaten API data
*
* @dependency - none
*   - independent functionality
*   - just requires data to be passed
*   MAIN METHODS:
*     api.prettifyData 
*       @params 
*         - data    mixed(obj/string/numeric)  - required
*         - return_string_data_as   string - optional
**/


function PrettifyDataService() {

  var api = {};

  //Data configs
  api.make_decimal_currency = true;
  api.currency = "R ";



  /**
  * The Main Call for this function (class)
  */
  api.prettifyData = function(data, return_string_data_as) {

    // var data = .replace(/[\W_]+/g," ");

    var prettifiedData;

    if (typeof data == 'object') {
      prettifiedData = api.prettifyObject(data, return_string_data_as);
    }

    if (typeof data == 'string') {
      prettifiedData = api.prettifyString(data, return_string_data_as);
    }

    return prettifiedData;

  }





  api.prettifyObject = function(obj, return_string_data_as) {
    var new_obj = {};
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {

      var key = keys[i];
      var value = obj[key];

      var prettifiedKey = api.cleanseData(key, return_string_data_as);
      var prettifiedValue = api.cleanseData(value, return_string_data_as);

      new_obj[prettifiedKey] = prettifiedValue;

    }
    return new_obj;
  }



  api.cleanseData = function(data, return_string_data_as) {
    //var cleansedData = data;
    if (typeof data == 'string') {
      data = api.prettifyString(data, return_string_data_as);
    }

    if (typeof data == "number") {
      data = api.prettifyNumber(data);
    }

    return data;

  }



  api.prettifyNumber = function(data) {
    if (data % 1 !== 0 && api.make_decimal_currency === true) {
      if (data.toString().split('').length > 4) {
        data = api.formatLongNumber(data);
      }
      return api.currency+data;
    }
    return data;
  }



  api.prettifyString = function(data, return_string_data_as) {

    if (typeof data == "string") {

      var data = api.alphaNumericOnly(data);

      //Can extend the return cases as needed
      if (return_string_data_as == 'uppercase_all') {
        data = data.toUpperCase();
      }

    } else {
      //Error catching for developer to notice
      console.log("Not string! prettifyString expects string");
    }

    return data;

  }



  api.alphaNumericOnly = function(string) {
   
      return string.replace(/[\W_]+/g," ");

  }



  api.formatLongNumber = function(longNumber) {

    var n = longNumber.toString().split('.');
    var num = n[0];
    var dec = n[1];
    var r, s, t;

    if (num.length > 3) {
      s = num.length % 3;

      if (s) {
        t = num.substring(0,s);
        num = t + num.substring(s).replace(/(\d{3})/g, ",$1");
      } else {
        num = num.substring(s).replace(/(\d{3})/g, ",$1").substring(1);
      }
    }

    if (dec && dec.length > 3) {
      dec = dec.replace(/(\d{3})/g, "$1 ");
    }

    return num + (dec? '.' + dec : '');

  }



  return api;

}