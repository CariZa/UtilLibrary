


/**
* Tag: JSON
**/

function convertJSONToObj(json_unparsed) {
      if (typeof json_unparsed != 'object') {
        return JSON.parse(json_unparsed);
      } else {
        return json_parsed = json_unparsed;
      }
  }



/**
* Tag: Array Data Structuring
*/

function orderData(data, orderedKeys) {

	var new_order = new Array();

	for (var i = 0; i < data.length; i++) {
	  var row = new Array();
	  for(var j = 0; j < orderedKeys.length; j++) {  
	      row.push(data[i][orderedKeys[j]]);
	  }
	  new_order.push(row);
	}

	//newly created order
	return new_order;

}