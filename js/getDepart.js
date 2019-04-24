$(document).ready(function(){
  $.ajax({url: "http://localhost/applippe/departement.php", success: function(result){
        $("#div1").html(result);
  }}),

  $("select.custom-select").change(function(){
    var selectedCountry = $(this).children("option:selected").val();
      $.ajax({url: "http://localhost/applippe/departement.php?choix="+selectedCountry, success: function(result){
        $("#div1").html(result);

      }})})});
