console.log('js');
$(document).ready(function(){
  // $("button").click(function(){
  //   $("p").hide();
  // });
  $('.menu-button').on('click', function(){
     console.log(this.id);
    var itemName = this.id; //stogin the value to a variable
    $('#items').append ('<br>' + itemName);
    $('#price').append ('<br>' + itemName);
  });
});
