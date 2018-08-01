'use strict';

$(pageLoad);

$('#user-form').on('submit', (e) => {
  e.preventDefault();
  console.log('SUBMIT CLICKED!');
  console.log(e.target);
  let data = {
    name: e.target.name.value,
    cohort: e.target.cohort.value,
    isPassing: e.target.isPassing.value
  };

  $.post('/db/students', data)
    .then(() => {
      pageLoad();
    });
});

// Try clicking this button a few times with your chrome console open, watch the id values
$('#reset').on('click', (e) => {
  e.preventDefault();
  console.log('RESET CLICKED!');

  $.post('/db/seed')
    .then(() => {
      pageLoad();
    });
});

function pageLoad() {
  $.get('/db/students')
    .then(
      (data) => {
        console.log(data);
        $('#results').empty();

        data.rows.forEach((item) => {
          console.log(item);
          let content = `
          <h2>${item.name}</h2>
          <p>cohort: ${item.cohort}</p>
          <p>isPassing: ${item.ispassing ? 'PASSING!' : 'FAILING'}</p>
        `;
          $('#results').append(content);
        });
      },
      (err) => {
        console.error(err);
      }
    );
}
