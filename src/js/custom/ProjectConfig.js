/**
*
* Project Config
*
* @author Ey Pacha!
*
* @since  1.0.0
*
* @see {@link http://dev.eypacha.com}
*
* @todo Complete documentation.
*/

class ProjectConfig {

    /**
    *
    * @method               constructor();
    * @description          constructor for this class
    */

    constructor() {

        this._isProd = true;

        this._rememberLanguage = false;

        this._defaultLanguage = "es";

        this._updateTime = 1000 * 60 * 10;

        this.defaultApp = 0;

        this._isDebug;

        this._showContextMenu;

        this._showMouse = false;

        this._isFullScreen = true;

        this._dataURL;

        this._isAppClosed = false;

        this._logoPath = "logo.svg";

    }


    /**
    *
    * @method               getData();
    * @description          ...
    * 
    */

    getData = () => {

        $.ajax({ url: "json/config.json", type: 'post', dataType: 'json', success: this.loadData, error: () => { console.log("Error al cargar config.json") } });

    }



    /**
    *
    * @method               loadJson();
    * @description          ...
    * 
    */

    loadData = (data) => {

        this._isProd = data.isProd;

        this._rememberLanguage = data.rememberLanguage;

        this._defaultLanguage = data.defaultLanguage;

        if (this._rememberLanguage) localStorage.setItem('language', this._defaultLanguage);

        this._updateTime = data.updateTime;

        this._defaultApp = data.defaultApp;

        this._isDebug = data.isDebug;

        this._showContextMenu = data.showContextMenu;

        this._showMouse = data.showMouse;

        this._isFullScreen = data.isFullScreen;

        this._dataURL = data.dataURL;

        var onJsonLoaded = new CustomEvent("onLoad", { detail: data });

        document.dispatchEvent(onJsonLoaded);

    }

     /**
    *
    * @method               setDefaults();
    * @description          Start the time checker to close the app
    * 
    */

    setDefaults = () => {



        if(!this.showMouse){


            if (!$("*").hasClass("cursor-none")) {
                $("*").addClass("cursor-none");
            }

            //document.body.style.cursor = 'none';

        }else{

            //document.body.style.cursor = 'auto';
 
            
            if ($("*").hasClass("cursor-none")) {
                $("*").removeClass("cursor-none");
            }

        }

        console.log("on show mouse");

        if(!this.showContextMenu){

            window.addEventListener('contextmenu', function (e) { 
              
              e.preventDefault(); 

            }, false);

        }else{

            window.addEventListener('contextmenu', function (e) { 
              
            }, false);

        }



    }

    toggleMouse = () => {

        this.showMouse = !this.showMouse;

        this.setDefaults();

        console.log(this.showMouse);

    }

    toggleContextMenu = () => {

        this.showContextMenu = !this.showContextMenu;

        this.setDefaults();

    }


    //getters and setters...

    get isProd() { return this._isProd; };

    set isProd(value) { this._isProd = value; };

    get rememberLanguage() { return this._rememberLanguage; };

    set rememberLanguage(value) { this._rememberLanguage = value; };

    get defaultLanguage() { return this._defaultLanguage; };

    set defaultLanguage(value) { this._defaultLanguage = value; };

    get updateTime() { return this._updateTime; };

    set updateTime(value) { this._updateTime = value; };

    get dataURL() { return this._dataURL; };

    set dataURL(value) { this._dataURL = value; };

    get isAppClosed() { return this._isAppClosed; };

    set isAppClosed(value) { this._isAppClosed = value; };

    get showContextMenu() { return this._showContextMenu; };

    set showContextMenu(value) { this._showContextMenu = value; };

    get showMouse() { return this._showMouse; };

    set showMouse(value) { this._showMouse = value; };

    get isDebug() { return this._isDebug; };

    set isDebug(value) { this._isDebug = value; };
    
}
