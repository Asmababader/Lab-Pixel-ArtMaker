// Select color inpuit
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
	e.preventDefault();

	var x=document.getElementById("pixelCanvas").innerHTML;
	if(x !== ""){
		document.getElementById("pixelCanvas").innerHTML="";
	}


  	var heightP=document.getElementById("inputHeight").value;
	var widthP= document.getElementById("inputWidth").value;
  	for(var row=1; row <=heightP; row++){
  		
  		var tr= document.createElement("TR");
  		document.querySelector("#pixelCanvas").appendChild(tr);
  		
  		for(var col= 1; col <= widthP; col++){
  			var td=document.createElement("TD");
  			tr.appendChild(td);
  		}
  	}
}

var submitButton = document.querySelector("#sub");
submitButton.addEventListener("click", makeGrid);




document.getElementById("pixelCanvas").addEventListener("click", function(event){


	
	var color= document.getElementById("colorPicker").value;
	if(event.target.nodeName ==="TD"){
		
		event.target.style.backgroundColor= color;
	}
});

