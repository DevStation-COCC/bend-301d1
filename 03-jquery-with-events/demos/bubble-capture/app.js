var element1 = document.getElementsByClassName('element1')[0];
var element2 = document.getElementsByClassName('element2')[0];
var element3 = document.getElementsByClassName('element3')[0];

var log = function(e) { console.log(this.className); };
var log2 = function(e) { console.log(this.className + "!!!"); e.stopPropagation();};

/* Bubbling */
 element1.addEventListener('click', log);
 element2.addEventListener('click', log); 
 element3.addEventListener('click', log2);

/* Capturing */
//  element1.addEventListener('click', log, true);
//  element2.addEventListener('click', log, true);
//  element3.addEventListener('click', log2, true);