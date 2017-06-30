$(document).ready(function() {
  // $('#submitBtn').on("click", function(e) {
  //   e.preventDefault();
  //
  //   // Create an object for the user's data JSON.stringify(JSON.parse($("#txt").val()));
  //   var purchaseData = {
  //     purchase_type: $('input[name=blowout]:checked').val(),
  //     // purchase_type: $('#dry_style').val(),
  //     // purchase_type: $('#updo').val(),
  //     // purchase_type: $('#party').val(),
  //     purchase_price: $('input[name=blowout]:checked').val(),
  //     appt_time: $('#appt_time').val(),
  //     appt_date: $('#appt_date').val()
  //   };
  //   console.log(purchaseData);
  //   $.post('/api/purchase', purchaseData, function(data) {
  //     window.location = "checkout.html?id=" + data.id + "#name=" + data.name;
  //   });
  // });
  var formValuesObj = {
    type: "",
    date: null,
    time: null,
  };

  $(".btn-default").on("click", function(e) {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name) {
      formValuesObj.type = e.target.name;
    }
  });

  $(".form-control").on("blur", function(e) {
    e.preventDefault();

    const formField = $(e.target).val();

    switch (e.target.name) {
      case "apt_date":
        formValuesObj.date = e.target.value;
        break;
      case "apt_time":
        formValuesObj.time = e.target.value;
        break;
    }
    console.log(formValuesObj)
//
  });

  $("#submitBtn").on("click", function(e) {
    e.preventDefault();

    if (formValuesObj.type !== "" && formValuesObj.date !== null && formValuesObj.time !== null) {
      var formValuesString = JSON.stringify(formValuesObj);
      sessionStorage.setItem("orderInProgress", formValuesString);
      location.href = "/checkout";

      //redirect
    } else {
      // disabled button
    }
  });
});
