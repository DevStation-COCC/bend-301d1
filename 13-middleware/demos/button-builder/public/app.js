'use strict';

function setColor(ctx, next) {
  $('button').css('background-color', '#' + ctx.params.color);
  $('form')[0].color.value = ctx.params.color;
  next();
}

function setRadius(ctx, next) {
  $('button').css('border-radius', ctx.params.radius + 'px');
  $('form')[0].radius.value = ctx.params.radius;
  next();
}

function setPhrase(ctx) {
  $('button').text(ctx.params.phrase);
  $('form')[0].phrase.value = ctx.params.phrase;
  console.log(document.getElementById('thebutton'));
  $('#buttoncode').text(document.getElementById('thebutton').outerHTML);
}

page('/:color/:radius?/:phrase?', setColor, setRadius, setPhrase);
page('*', ctx => console.log('404', ctx));


$(function() {
  const f = $('form')[0];
  page();

  $('form').on('change', 'input', function(){
    const path = [f.color.value, f.radius.value, f.phrase.value].filter(v => v).join('/')
    page.show(`/${path}`);
  })
})
