


		var ty=new Array();
		ty["home"]=0;
		ty["shop"]=1;
		var con=new Array();
		con["dry"]=3;
		con["wet"]=5;
		con["elec"]=0;

			
	function cal(){

		var total=0;

		var theForm = document.forms["garbage"];
		var selectedType = theForm.elements["type"];
		var selectedCond = theForm.elements["cond"];

		if(ty[selectedType.value]==0)
			total = con[selectedCond.value]*Number(document.getElementById("weight").value);
		else
			total = 2*con[selectedCond.value]*Number(document.getElementById("weight").value);
		document.getElementById("sum").innerHTML="Rs. "+total;
	}