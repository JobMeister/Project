/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("console.log(\"checkaaaaaaaaa\");\n(function ($) {\n  \"use strict\";\n\n  // Spinner\n  var spinner = function () {\n    setTimeout(function () {\n      if ($(\"#spinner\").length > 0) {\n        $(\"#spinner\").removeClass(\"show\");\n      }\n    }, 1);\n  };\n  spinner();\n\n  // // Initiate the wowjs\n  // new WOW().init();\n\n  // asif random pages\n  function pic() {\n    var images = [\"asif1clear.png\", \"asif2clear.png\", \"asif3clear.png\"];\n    // $(\".asif\").attr(\"img/\", images[Math.floor(Math.random() * images.length)]);\n    $(\".asifpe\").html(\n      '<img class=\"asifke\" src=\"img/' +\n        images[Math.floor(Math.random() * images.length)] +\n        '\">'\n    );\n  }\n  pic();\n\n  // Sticky Navbar\n  $(window).scroll(function () {\n    if ($(this).scrollTop() > 300) {\n      $(\".sticky-top\").addClass(\"shadow-sm\").css(\"top\", \"0px\");\n    } else {\n      $(\".sticky-top\").removeClass(\"shadow-sm\").css(\"top\", \"-100px\");\n    }\n  });\n\n  // Back to top button\n  // $(window).scroll(function () {\n  //   if ($(this).scrollTop() > 300) {\n  //     $(\".back-to-top\").fadeIn(\"slow\");\n  //   } else {\n  //     $(\".back-to-top\").fadeOut(\"slow\");\n  //   }\n  // });\n  // $(\".back-to-top\").click(function () {\n  //   $(\"html, body\").animate({ scrollTop: 0 }, 1500, \"easeInOutExpo\");\n  //   return false;\n  // });\n\n  if (localStorage.getItem(\"About\") !== null) {\n    // Gets about content from the admin edit\n    $(\"#RealAbout\").html(localStorage.getItem(\"About\"));\n  }\n})(jQuery);\n\n\n//# sourceURL=webpack://project/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;