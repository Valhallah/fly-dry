
$(document).ready(function() {
  $('#submitBtn').on("click", function(e) {
    e.preventDefault();

    // Create an object for the user's data
    var userData = {
      name: $('#formName').val(),
      dob: $('#formDOB').val(),
      email: $('#formEmail').val(),
      password: $('#formPassword').val()
    };
    var host = window.location.host;
    $.post('http://' + host + '/api/users', userData, function(data) {
      window.location = "profile.html?id=" + data.id + "#name=" + data.name;
      console.log('data', data);
    });
  });
});
