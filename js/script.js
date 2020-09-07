console.log('js');

$('#cart').hide();

var total =0; //initializing the numeric variable

$(document).ready(function(){
  $('#back').on('click',function(){
    $('#menu').show();
    $('#cart').hide();
  })

  $('.menu-button').on('click', function(){

    //item name from id of button being clicked;
    //this refers to what is being clicked

    console.log(this.id);
    // $('#items').append ('<br>' + this.id)
    var itemName = this.id; //storing the value to a variable
    $('#items').append ('<br>' + itemName);

    // console.log($('.menu-button').index(this));
    var myIndex = $('.menu-button').index(this);
    console.log(myIndex);

    var itemPrice = document.getElementsByClassName('itemPrice');
    console.log(itemPrice);
    console.log(itemPrice.length);

    //searching or matching
    for (var i=0; i< itemPrice.length;i++){
      // console.log(itemPrice[i].innerHTML);
      if (myIndex == i){
        // console.log('yes');//
        console.log(itemPrice[i].innerHTML);
        var price = itemPrice[i].innerHTML;
        $('#price').append('<br>' + price);
        total += parseFloat(price);
        console.log(total);
      } //if ends
} //for loop ends

}); //.menu-button
$('#cartIcon').click(function(){
  console.log('clicked');
$('#cart').show();
$('#menu').hide();
});

$('#calculate').on('click', function(){
  document.getElementById('amount').innerHTML = '$' + total.toFixed(2);
});

});//document.ready() ends
