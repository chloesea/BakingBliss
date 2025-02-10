window.onload=function(){
    var date=new Date();
    var datee=date.getDate()+"-" +(date.getMonth()+1) +"-"+ date.getFullYear();
    var timee=date.getHours()+ ":"+ date.getMinutes()+ ":"+date.getSeconds();
    var dateTime=datee+"  "+timee;
    document.getElementById("dateTime").textContent=dateTime;
    }

    function validateForm(event){
        event.preventDefault();
    var email1=document.getElementById("email1").value;
    var email2=document.getElementById("email2").value;
    var pass1=document.getElementById("pass1").value;
    var pass2=document.getElementById("pass2").value;
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var check=document.getElementById("check").checked;
    var valid=true;
    
    if(email1!=email2){
        document.getElementById("em").innerHTML="Email addresses must match";
        valid=false;
    }
    else{
        document.getElementById("em").innerHTML="";
        
    }

    if(pass1!=pass2){
        document.getElementById("ps").innerHTML="Passwords must match!";
        valid=false;   
    }
    else{
        document.getElementById("ps").innerHTML="";
       
    }
    if(valid){
    var welcomeMessage = "Welcome"+" "+ name1+" "+ name2+"!";
    document.getElementById("sign").textContent = welcomeMessage;
    }
    return valid;
    
}