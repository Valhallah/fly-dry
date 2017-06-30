
$(document).ready(function() {
  $('#submitBtn').on("click", function(e) {
    e.preventDefault();

    // Create an object for the user's data
    var userData = {
      name: $('#formName').val(),
      // dob: $('#formDOB').val(),
      email: $('#formEmail').val(),
      password: $('#formPassword').val()
    };

    $.post('/api/users', userData, function(data) {
      window.location = "services.html?id=" + data.id + "#name=" + data.name;
    });
  });
});
