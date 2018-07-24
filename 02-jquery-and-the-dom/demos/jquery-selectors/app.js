'use strict';
//*****basic selectors*****//
var category = 'list-item';

//element
$('li');

//class
$('.active');

//id
$('#beautiful-list');

//parent descendent
$('#beautiful-list li');

// parent > child
$('#beautiful-list > li');

//attribute
$('input[name="textbox"]');
$('li[data-category="list-item"]');

//another way to do the previous selection
$('li[data-category=' + category + ']');

//get text of the matched element(s)
console.log($('h1').text()); // WELCOME TO A NEW WORLD OF DOM MANIPULATION
console.log($('header').html()); // <h1> WELCOME TO A NEW WORLD OF DOM MANIPULATION </h1>


//set text of the matched element(s)
$('h1').text('this is a new h1');

//set the data-category attribute of an li
$('.li-template').attr('data-category', 'new-cat');

//get the data-category attribute of an li
console.log($('button').attr('name', 'new-button'));
$('button').attr('name', 'new-button').addClass();
var res = $('.li-template').data('new', 'low');
console.log($('.li-template').data());

//make a new <li> and append it to the <ul>
var $newLi = $('.li-template').clone();

$newLi
  .text('new item added to the list')
  .addClass('active')
  .removeClass('li-template');

$('#beautiful-list').append($newLi);

//remove an element from the DOM

//run a command as soon as the DOM loads
//Typically you will place a majority of your code inside .ready()
$(document).ready(function(){
  var addExcitement = function(index, element){
    $(element).text(`${index}: ${$(element).text()}!!!`);
  }

  var $liList = $('#beautiful-list li');
  $.each($liList, addExcitement);

  var $list = $('#beautiful-list');
  var $child = $($list.children().eq(0).parent());
  console.log($child);

});