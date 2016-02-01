$('#alert').click( function(){
 alert('You clicked me!');
});

$('#makeGreen').click(function(){
	$('#myFirstDiv').css('background-color','green')
  
 // $('#myNumber').text('5');
});

$('#makeBlue').click(function(){
	$('#myFirstDiv').css('background-color','blue');
});

$('#makeRed').click(function(){
	$('#myFirstDiv').css('background-color','red')
});

var myNumber = 1;

$('#addOne').click(
	function() {
  	myNumber = myNumber + 1;    
  	$('#myNumber').text(myNumber);
  }
)

$('#subtractOne').click(

	function() {
  	myNumber = myNumber - 1;    
  	$('#myNumber').text(myNumber);
  }
)