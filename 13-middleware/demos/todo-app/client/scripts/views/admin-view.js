'use strict';

var app = app || {};

(function (module) {
  const adminView = {};

  adminView.initAdminPage = () => {
    app.showOnly('.admin-view');

    $('#admin-form').on('submit', (event) => {
      event.preventDefault();
      let token = event.target.passphrase.value;

      $.get(`${ENV.apiUrl}/admin`, {token})
        .then(() => {
          localStorage.token = true;
          page('/tasks/add');
        })
        .catch(() => page('/'));
    })
  };

  adminView.verify = (ctx, next) => {
    if(!localStorage.token) $('.admin').hide();
    else console.log('token');
    next();
  }

  module.adminView = adminView;
})(app)
