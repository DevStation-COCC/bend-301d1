'use strict';

var app = app || {};

(function (module) {
  const errorView = {};

  errorView.initErrorPage = err => {
    $('#error-message').empty();
    app.showOnly('.error-view');
    app.render('error-template', err);
  };

  module.errorView = errorView;
})(app)
