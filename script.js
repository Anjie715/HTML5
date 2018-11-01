function allowDrop(e)
{
	e.preventDefault();
}

function drag(e)
{
	e.dataTransfer.setData("Text",e.target.id);
}

function drop(e)
{
	e.preventDefault();
	var data=e.dataTransfer.getData("Text");
	var node=document.getElementById(data);
		clone=node.cloneNode(true);
		
	if(clone.id == 'drag1'){
		e.target.appendChild(clone);
		var div1 = document.createElement("DIV");
			var div2 = document.createElement("DIV");
		div1.setAttribute('class', 'btn3');
		div2.setAttribute('class', 'btn3');
		e.target.appendChild(div1);
		e.target.appendChild(div2);
	}
        if(clone.id == 'drag2'){
    		e.target.appendChild(clone);
    		var div1 = document.createElement("DIV");
			var div2 = document.createElement("DIV");
    		div1.setAttribute('class', 'btn3');
    		div2.setAttribute('class', 'btn3');
    		e.target.appendChild(div1);
    		e.target.appendChild(div2);
	}		
        if(clone.id == 'drag3'){
    		e.target.appendChild(clone);
    		var div1 = document.createElement("DIV");
			var div2 = document.createElement("DIV");
			var div3 = document.createElement("DIV");
    		div1.setAttribute('class', 'btn3');
    		div2.setAttribute('class', 'btn3');
			div3.setAttribute('class', 'btn3');
    		e.target.appendChild(div1);
    		e.target.appendChild(div2);
    		e.target.appendChild(div3);
	}			
       if(clone.id == 'drag4'){
    		e.target.appendChild(clone);
    		var div1 = document.createElement("DIV");
    		div1.setAttribute('class', 'btn3');
    		e.target.appendChild(div1);
	}
    		
}
