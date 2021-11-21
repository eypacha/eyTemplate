/**
* @summary Fill me
*
* @description Then i will add this.
*
* @author Ey Pacha!
*
*
* @since  1.0.0
*
* @see {@link http://dev.eypacha.com}
*
* @todo Complete documentation. Stop de usar espanglish
* 

// Usemos el modo estricto siempre que laburemos en JS > https://www.w3schools.com/js/js_strict.asp

"use strict";


/**
* @function Project
* @description Initialize project...
*/

var Project = function () {

    // No modificar estas variables. Son parte del core

    var config = new ProjectConfig();

    var languagesManager;

    var projectUtils = new ProjectUtils();

    var helper = new Helpers();

    var uiSounds = new AudioManager();

    uiSounds.instanceName = "uiSounds";

    uiSounds.playerId = 0;

    //**** Aca tus variables *****

    var title;

    var description;

    //***************************/



    /**
    * @function addListeners
    * @description ...
    *
    */

    var addListeners = function () {

        /*
        *  You can delete this at prod
        */
        $(document).keypress(function (event) {

            var keycode = (event.keyCode ? event.keyCode : event.which);

            switch (keycode) {

                case 109: // M
                    // config.toggleMouse();
                    break;
                case 110: // N
                    // config.toggleContextMenu();
                    break;
                default:
                    break;

            }

        });


        // Eventos custom

        document.addEventListener("onLoad", onDataLoaded);

        document.addEventListener("onLoadByLanguage", parseLanguageData);

    }



    /**
    * @function loadConfigData
    * @description Carga los json correspondientes el config y despues la data segun el lenguaje
    *
    */

    var loadConfigData = function () {

        config.getData();

    }


    /**
    * @function onDataLoaded
    * @description Callback cuando se confirma la carga de data del config.json
    *
    */

    var onDataLoaded = function (e) {


        config.setDefaults();

        var lang;

        if (config.rememberLanguage == true) {

            lang = localStorage.getItem('language');

            if (lang == null || lang == undefined) {
                lang = config.defaultLanguage;
            }

        } else {
            lang = config.defaultLanguage;
        }


        languagesManager = new LanguagesManager(config.defaultLanguage);

        languagesManager.loadDataByLanguage(config.defaultLanguage, false);

    }



    /**
    * @function parseLanguageData
    * @description Callback de cuando se confirma la carga del json por lenguaje
    *
    */

    var parseLanguageData = function (e) {

        var content = e.detail.content;

        entryPoint();

    }


    /**
    * @function entryPoint
    * @description Punto de entrada. Aca se asigna el contenido de json a las variables a utilizar.
    *              Desde aca arrancas vos
    *
    */

    var entryPoint = () => {

        parseJson();

        // More stuff

    }


    /**
    * @function parseJsonExample
    * @description example
    *
    */
    var parseJson = () => {

        title = languagesManager.currentLanguageData.title
        description = languagesManager.currentLanguageData.description;

        $('#title').text(title);
        $('#description').text(description);

    }


    /**
    * @function easeInOutBtnAnimation();
    * @description Animation Ease In - Out on touched btns
    */

    var easeInOutBtnAnimation = function (btnElmt, timeF, scaleF, prevDefault = true) {
        TweenMax.to(btnElmt, timeF, {
            scale: scaleF, ease: Power3.easeIn, yoyo: true,
            onStart: () => {
                if (prevDefault) { $("*").css("pointer-events", "none"); }
            }, onComplete: () => {
                TweenMax.to(btnElmt, timeF, {
                    scale: 1, ease: Power3.easeOut, yoyo: true,
                    onComplete: () => {
                        if (prevDefault) { $("*").css("pointer-events", "auto"); }
                    }
                });
            }
        });
    }


    /**
    * @function initSmoothScrollbar();
    * @description set smooth scrollbar to selected divs...
    */

    var initSmoothScrollbar = function () {

        Scrollbar.use(window.OverscrollPlugin);

        const overscrollOptions = {
            enable: true,
            effect: navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
            damping: 0.2,
            maxOverscroll: 150,
            glowColor: '#222a2d',
        };

        Scrollbar.init(document.querySelector('.artists'),
            {
                alwaysShowTracks: true,
                continuousScrolling: true,
                plugins: {
                    overscroll: { overscrollOptions },
                }
            });


    }


    return {

        init: function () {

            loadConfigData();

            addListeners();

        }

    }

}();

$(document).ready(function () { Project.init(); });
