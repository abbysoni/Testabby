

function validation(e)
{
    console.log("test");
    e.preventDefault();
    var un = document.getElementById("uname").value;
    var mail=document.getElementById("umail").value;
    var num=document.getElementById("unum").value;

    if (un=="") {
        document.getElementById("vis-name").innerHTML="*Username is required <br>";   
        return false;   
    } else if (mail=="") {
        document.getElementById("vis-mail").innerHTML="*Email is required <br>";   
        return false;   
    } else if (num=="") {
        document.getElementById("vis-num").innerHTML="*PhoneNo. is required";   
        return false;   
    } else {
        return true;
    }
}