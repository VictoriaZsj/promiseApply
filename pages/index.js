requirejs.config({    baseUrl:'./',    paths:{        jquery: "./libs/jquery-3.2.0",        API: './libs/API',        request: './libs/request',        firstPromise: './components/firstPromise',        imageCenter: './components/imageCenter',        dialog: './components/Dialog',        button:'./components/button'    }})define(function(require){    require('firstPromise');    var imageCenter = require('imageCenter');    console.log(imageCenter)    var imgList=document.querySelectorAll('.img-center');    imageCenter(imgList, 'wspectFill');    require('button')})