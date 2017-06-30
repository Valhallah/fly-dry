$(document).ready(function() {
  // $('#serviceAddrConfirmation').click(function(){
  //   $('#serviceAddrForm').toggle();
  // });
  var parsedOrderData = JSON.parse(sessionStorage.getItem("orderInProgress"));

  //$("#paymentForm").attr("data-amount", 99);
  console.log(parsedOrderData)
  $(".stripe-button-el span").text("Pay " + parsedOrderData.price + " for " + parsedOrderData.type);

  console.log($(".stripe-button-el"))
  $('#submitBtn').on("click", function(e) {
    e.preventDefault();

    // Create an object for the user's data JSON.stringify(JSON.parse($("#txt").val()));
    var locationData = {
      street: $('#b_addr_street').val(),
      city: $('#b_addr_city').val(),
      state: $('#b_addr_state').val(),
      zip: $('#b_addr_zip').val()
    };

    console.log(locationData);
    $.post('/api/location', locationData, function(data) {
      // window.location = "checkout.html?id=" + data.id + "#name=" + data.name;

    });
  });
});
