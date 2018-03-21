$(document).ready(function() {
  var custname;
  var custstreet;
  var custcity;
  var custstate;
  var custzip;
  $("button#checkout").click(function(event){
    $("#custinfo").css("display","block");
    event.preventDefault();
  });
  $("form#custinfo").submit(function(event){
    event.preventDefault();
    custname = $("#name").val();
    custstreet = $("#street").val();
    custcity = $("#city").val();
    custstate = $("#state").val();
    custzip = $("#zip").val();
    $("#return-name").text(custname);
    $("#return-street").text(custstreet);
    $("#return-city-state-zip").text(custcity + ", " + custstate + " " + custzip);
  });

  $("#order").click(function(){
    $("#myModal").css("display", "block");
  });
  $(".close").click(function(){
    $("#myModal").css("display", "none");
  });
});
