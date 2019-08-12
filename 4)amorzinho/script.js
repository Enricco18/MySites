function hide(x){
    var y = document.getElementsByClassName(x);

       for(var i=0; i<y.length; i++){
       y[i].style.display= "block";  
    }
}

function color(){
    var z = document.getElementById("color");
    var lista= ["red","blue","white","yellow"];
    var a =0;
    var i=0;
    console.log("ta indo");
    z.style.color = lista[0];
    setInterval(function(){
        z.style.color= lista[i];
        console.log(i);
        i+=1
        if(i==4){
        i=0;
        }
   },500);

}
