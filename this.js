
//   for the check box
function myCheck() {
    let X = document.getElementById('email').value;
    let X2 = document.getElementById('fname').value;
    var B = document.getElementById("myInput").value;
    let check = document.getElementById('mytask');
    if (X == "" ||B==""  || X2 == "" ){
        demo1.style.display="block";
    }else if(B.length >=5){
        demo2.style.display="block";
    } else {
        demo1.innerHTML == check;
        demo1.innerHTML = "The value is valid"
    }
};


// For the eye show
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


contact.style.color ="white";
contact.style.textAlign = "center";
contact.style.fontSize = "50px";


  






    function logIn(){
    let check = document.getElementById('mytask').value;
    if(check = demo1.innerHTML)
    window.open('./information.html', '_blank')
    }
   
   