const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Test",
    "nav-item-8": "Careers",
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

//Nav Section
let parentNav = document.querySelector('nav');
const newNav1 = document.createElement('a')
const newNav2 = document.createElement('a')
parentNav.append(newNav1);
parentNav.append(newNav2);

let headerNav = document.querySelectorAll('nav a');
headerNav.forEach (function(link,index){
  link.textContent = siteContent["nav"][`nav-item-${[index+1]}`]
  link.style.color = "green";
}
);


//CTA Section
let ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent["cta"]["h1"]

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"]

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content

// Top Content
let featuresH4 = document.querySelector('.top-content div:first-child h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"]

let featuresP = document.querySelector('.top-content div:first-child p');
featuresP.textContent = siteContent["main-content"]["features-content"]

let aboutH4 = document.querySelector('.top-content div:last-child h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"]

let aboutP = document.querySelector('.top-content div:last-child p');
aboutP.textContent = siteContent["main-content"]["about-content"]

// Middle Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Bottom Content

let servicesH4 = document.querySelector('.bottom-content div:first-child h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"]

let servicesP = document.querySelector('.bottom-content div:first-child p');
servicesP.textContent = siteContent["main-content"]["services-content"]

let productH4 = document.querySelector('.bottom-content div:nth-child(2) h4');
productH4.textContent = siteContent["main-content"]["product-h4"]

let productP = document.querySelector('.bottom-content div:nth-child(2) p');
productP.textContent = siteContent["main-content"]["product-content"]

let visionH4 = document.querySelector('.bottom-content div:last-child h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"]

let visionP = document.querySelector('.bottom-content div:last-child p');
visionP.textContent = siteContent["main-content"]["vision-content"]

// Contact
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"]

let contactP1 = document.querySelector('.contact > p:nth-child(2)');
contactP1.textContent = siteContent["contact"]["address"]

let contactP2 = document.querySelector('.contact > p:nth-child(3)');
contactP2.textContent = siteContent["contact"]["phone"]

let contactP3 = document.querySelector('.contact > p:nth-child(4)');
contactP3.textContent = siteContent["contact"]["email"]

// Footer
let footerP = document.querySelector('footer p');
footerP.textContent = siteContent["footer"]["copyright"]

