# eyTemplate
This is a empty-project for quickly start to building backendless small webapps and sites.

## Features

- [GulpJs](http://gulpjs.com) Task runner tool
- [SASS](https://sass-lang.com) CSS preprocessor
- [Boostrap](https://getbootstrap.com) Front-end open source toolkit
- [Font Awesome](https://fontawesome.com) Icon set and toolkit
- [Slick](https://kenwheeler.github.io/slick/) Responsive carousel jQuery plugin t
- [GSAP](https://greensock.com/docs/) Animation library
- [Custom utils and helpers](https://en.wikipedia.org/wiki/Helper_class): forms, mobileHelpers, UrlParamReplacer, fullScreenMode, copyToClipboard, TimeUtils.

## Gulp Tasks

- #### vendors()
  Move all the files from node_modules to src folder. Then from there we concat js files and use css or scss file for the bundle css bundle.
- ### compileVendors()
  Create a separate bundle for all the vendors scripts. We just compile this once on build.
- ### styles()
  Create all the process for the styling.
- ### scripts()
  Create all the process for the development js files.
- ### minimizeImages()
  Convert to minimized images to webp
- ### watch()
  Check for all the css and js changes. Then call reload method

## Finals
Sorry for the mess, I need todo a todo