const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');


test('dark mode test', () => {
    
    document.body.innerHTML = '<div id="navbarCollapse"></div> <div class="navbar"></div> <div class="nav-item"></div> <h1></h1> <body></body> <div id="bgHead"></div> <p></p> <div id="RealAbout"></div> <button id="darkBtn"></button>';
    
    require('./about.js')

    const darkBtn = document.getElementById('darkBtn');

   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(true);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(true);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(true);
    expect($("h1")[0].classList.contains("whitetext")).toBe(true);
    expect($("body")[0].classList.contains("darkMode")).toBe(true);
    expect($("#bgHead")[0].classList.contains("bg-light")).toBe(false);
    expect($("p")[0].classList.contains("bg-light")).toBe(false);
  
   darkBtn.click();
    expect($("#navbarCollapse")[0].classList.contains("darkMode")).toBe(false);
    expect($(".navbar")[0].classList.contains("darkMode")).toBe(false);
    expect($(".nav-item")[0].classList.contains("whitetext")).toBe(false);
    expect($("h1")[0].classList.contains("whitetext")).toBe(false);
    expect($("body")[0].classList.contains("darkMode")).toBe(false);
    expect($("#bgHead")[0].classList.contains("bg-light")).toBe(true);
    expect($("p")[0].classList.contains("bg-light")).toBe(true);
    expect($("#RealAbout")[0].classList.contains("bg-white")).toBe(false);
  });
  