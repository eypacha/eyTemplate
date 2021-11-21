/**
* @summary Helpers for the framework :) - mobile utilities
*
* @description -
*
* @author Ey Pacha!
*
* @version 1.0.0
*
* @see {@link http://dev.eypacha.com}
*
*/

var TimeUtils = function() {

  return {

    /**
    * secondsToMMSS();
    * @description 									-						convert seconds to mm:ss format...
    * @return {string}					    -						...
    */

    secondsToMMSS: function(value, useHours = false){

       var secondsToConvert = parseInt(value);

       var hours   = Math.floor(secondsToConvert / 3600);

       var minutes = Math.floor((secondsToConvert - (hours * 3600)) / 60);

       var seconds = secondsToConvert - (hours * 3600) - (minutes * 60);

       if (hours < 10) {hours = "0"+hours;}

       if (minutes < 10) {minutes = "0"+minutes;}

       if (seconds < 10) {seconds = "0"+seconds;}

       var time = (useHours) ? hours + ':' + minutes + ':' + seconds : minutes + ':' +seconds;

       return time;

    },

  }

}
