$(document).ready(function() {
  $("button#checkout").click(function(event){
    $("#custinfo").css("display","block");
    event.preventDefault();
  });

  $("form#custinfo").submit(function(event){
    event.preventDefault();
    var custname = $("#name").val();
    var custstreet = $("#street").val();
    var custcity = $("#city").val();
    var custstate = $("#state").val();
    var custzip = $("#zip").val();
    $("#return-name").text(custname);
    $("#return-street").text(custstreet);
    $("#return-city-state-zip").text(custcity + ", " + custstate + " " + custzip);
  });

  $("#order").click(function(){
    $("#myModal").css("display", "block");
  });
  $(".close").click(function(){
    $("#myModal").css("display", "none");
    location.reload();
  });
});
