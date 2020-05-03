function shopping(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response =JSON.parse(this.responseText);
            var jshopping=response.shopping;
            var op=""
            for(var i=0;i<jshopping.length;i++){
                op +="<li>"+jshopping[i].slno + "</li>";
            }
            document.getElementById("a").innerHTML=op;

            var op1=""
            for(var i=0;i<jshopping.length;i++){
                op1 +="<li>"+jshopping[i].name + "</li>";
            }
            document.getElementById("b").innerHTML=op1;

            var op2=""
            for(var i=0;i<jshopping.length;i++){
                op2 +="<li>"+jshopping[i].qty + "</li>";
            }
            document.getElementById("c").innerHTML=op2;

            var op3=""
            for(var i=0;i<jshopping.length;i++){
                op3 +="<li>"+jshopping[i].unit + "</li>";
            }
            document.getElementById("d").innerHTML=op3;

            var op4=""
            for(var i=0;i<jshopping.length;i++){
                op4 +="<li>"+jshopping[i].dept + "</li>";
            }
            document.getElementById("e").innerHTML=op4;


            var op5=""
            for(var i=0;i<jshopping.length;i++){
                op5 +="<li>"+jshopping[i].notes + "</li>";
            }
            document.getElementById("f").innerHTML=op5;


    }
}
xhttp.open("GET","shopping.json",true);
xhttp.send();
}