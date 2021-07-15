var topNavColor = document.getElementById('topNav').style.backgroundColor = "red";

var cardP = document.querySelector('p');
cardP.innerText = "insert targeted and alorithmically created advertisement here, thinly veiled as a blogpost created by a real human being."
    
var cardsH1 = document.querySelectorAll('h1');
for (var i = 0; i < cardsH1.length; i++) {
    cardsH1[i].innerText = "These are actually user created blog posts";
}

var cardAds = document.getElementsByClassName('ads');
for (var i = 0; i < cardAds.length; i++) {
    cardAds[i].firstElementChild.innerText = "Please buy stuff";
}

var AdTags = document.getElementsByTagName('cardOne');

var addAd = document.createElement('h2');
var cardsAds = document.getElementById('cardOne').lastElementChild;
cardsAds.append(addAd);
addAd.innerHTML = "I am a paid advertisement";

function toggleNavLinks() {
    var classify = document.getElementById('aboutUs');
    classify.classList.toggle("hiddenClass")
}

function addNavLink() {
    var classify = document.getElementById('gallery');
    classify.classList.remove(navLink);
}