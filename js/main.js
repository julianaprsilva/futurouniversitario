$(".dropdown-menu li a").click(function(){
  $('#dropdownMenu1').val($(this).attr('data-value'));
  $("#dropdownMenu1").find('.selection').text($(this).text());
  $("#dropdownMenu1").find('.selection').val($(this).text());

});