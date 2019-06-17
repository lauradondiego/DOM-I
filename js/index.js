const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let midImg = document.getElementById("cta-img");
midImg.setAttribute('src', siteContent["cta"]["img-src"])

let lastImg = document.getElementById("middle-img");
lastImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navBar = document.querySelector("nav").children;
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];
navBar[0].style.color = "green";
navBar[1].style.color = "green";
navBar[2].style.color = "green";
navBar[3].style.color = "green";
navBar[4].style.color = "green";
navBar[5].style.color = "green";

const newNav = document.createElement("a");
const nav = document.querySelector("nav");
nav.appendChild(newNav);
newNav.textContent = "Instagram"
newNav.style.color = "green";

const newNav2 = document.createElement("a");
const hi = document.querySelector("nav");
hi.prepend(newNav2);
newNav2.textContent = "Facebook"
newNav2.style.color = "green";


const topHeader = document.querySelector("h1");
topHeader.textContent = siteContent["cta"]["h1"];
topHeader.innerHTML = "DOM<br> IS<br> AWESOME";

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const midContent = document.querySelectorAll("p");
midContent[0].textContent = siteContent["main-content"]["features-content"];
midContent[1].textContent = siteContent["main-content"]["about-content"];
midContent[2].textContent = siteContent["main-content"]["services-content"];
midContent[3].textContent = siteContent["main-content"]["product-content"];
midContent[4].textContent = siteContent["main-content"]["vision-content"];


const midHeaders = document.querySelectorAll("h4");
midHeaders[0].textContent = siteContent["main-content"]["features-h4"];
midHeaders[1].textContent = siteContent["main-content"]["about-h4"];
midHeaders[2].textContent = siteContent["main-content"]["services-h4"];
midHeaders[3].textContent = siteContent["main-content"]["product-h4"];
midHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const contactHeader = document.querySelectorAll("h4");
contactHeader[5].textContent = siteContent["contact"]["contact-h4"];

const contactStuff = document.querySelectorAll("p");
contactStuff[5].textContent = siteContent["contact"]["address"];
contactStuff[6].textContent = siteContent["contact"]["phone"];
contactStuff[7].textContent = siteContent["contact"]["email"];


const copyrightInfo = document.querySelectorAll("p");
copyrightInfo[8].textContent = siteContent["footer"]["copyright"];