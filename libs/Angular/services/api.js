
/**
* ApiDataService
* --Reusable Service--
* Independent of other services
* Uses a url, retrieves data
*   Useful for extending with other classes that manipulate API data
* @dependency - angular
*   - angular specific service
* @params - $http
*   METHODS:
*     api.fetchData 
*       @params 
*         - url   string              - required
*         - successHandler  function  - optional
*         - errorHandler    function  - optional
**/

function ApiDataService($http) {

  api = {};

  api.fetchData = function(url, successHandler, errorHandler) {

    //Success Handler

    if (!checkVariableSet(successHandler)) {
      callback = function(data, status, headers, config) {
        alert("whata!");
        console.log(data);
      }
    };

    //Error Handler

    if (!checkVariableSet(errorHandler)) {
      errorHandler = function(data, status, headers, config) {
        alert("Error: "+data);
      }
    };
    
    
    
    //API - Call for data
    
  	$http.get(url).success(successHandler).error(errorHandler);
    
  }



  //******************
  //Private functions
  //



  //Localised variable check helper;
  //  - checks if passed vairable undefined or null 
  function checkVariableSet(variable) {
    
    if (variable == undefined || variable == null) {
        return false;
    } else {
      return true;
    }
    
  }
  
  return api;

}