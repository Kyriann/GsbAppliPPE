$(document).ready(function(){
  $.ajax({url: "http://localhost/testajax/test_ajax.php", success: function(result){
        $("#div1").html(result);
  }}),

  $("select.custom-select").change(function(){
    var selectedCountry = $(this).children("option:selected").val();
      $.ajax({url: "http://localhost/testajax/test_ajax.php?choix="+selectedCountry, success: function(result){
        $("#div1").html(result);

      }})})});
