'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  taskView.initIndexPage = () => {
    app.showOnly('.task-view');

    app.Task.all.map(task => $('#task-list').append(task.toHtml()));
  }

  taskView.initAddForm = () => {
    app.showOnly('.add-view');
    
    $('#add-form').on('submit', (event) => {
      event.preventDefault();

      let task = {
        title: event.target.title.value,
        description: event.target.description.value,
        category: event.target.category.value,
        contact: event.target.contact.value,
        status: event.target.status.value,
      };

      module.Task.createTask(task);
    })
  }

  module.taskView = taskView;
})(app)
