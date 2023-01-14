const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');


test('Create ad dark mode test', () => {
    
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="container-xxl"></div> <div class="navbar"></div> <div class="nav-item"></div> <h1></h1> <h4></h4> <div class="footS"></div> <body></body> <button id="darkBtn"></button>';
    
    require('./createad.js')

    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($(".container-xxl")[0].classList.contains("bg-light")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(true);
  
   darkBtn.click();
   expect($(".container-xxl")[0].classList.contains("bg-light")).toBe(true);
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);

  });
  