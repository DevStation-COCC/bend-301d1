'use strict';

let emailRegex = /[\w\.]+@\w+\.(\w{2,3})?(edu)?/g;

let strs = [Adam DuQuette
  ad23am@cocc.edu
  adam@gmail.com
  555-431-8929
  (555)-381-8502
  555.987.6924
  555 123 4567
  "username@domain.suffix",
  "sharon.miller@gmail.com"]

strs.forEach(function(element){
  console.log(element.match(emailRegex));
})

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  let template = $('#neighborhoodtemplate').html();
  // 2. Use Handlebars to "compile" the HTML
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

//Add to local datastore
neighborhoodDataSet.forEach(function(neighborhoodObject){
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

//Add to html
neighborhoods.forEach(function(ourNewNeighborhoodObject){
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});

neighborhoods.forEach(item => $('#neighborhoods').append(item.toHtml()));

function Person(){
  this.age = 0;
  
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
};

let p = new Person();