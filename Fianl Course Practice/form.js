function vlaid_firstname()
{
    var fname = document.getElementById("vFirstname").value;
    var regx = /^[A-Za-z\s\'\-]{2,15}$/; // checks the user input (2 is the min and 15 is the max)
    if (regx.test(fname))
    {
        document.getElementById("firstnameprompt").innerHTML = "Accepeted";
        document.getElementById("firstnameprompt").style.color = 'green';
        return true;
    }
    else
    {
        document.getElementById("firstnameprompt").innerHTML = "Please enter at least 2 characters!";
        document.getElementById("firstnameprompt").style.color = 'red';
        return false;
    }

}

function vlaid_lastname()
{
    var fname = document.getElementById("vlasttname").value;
    var regx = /^[A-Za-z\s\'\-]{2,15}$/; // checks the user input (2 is the min and 15 is the max)
    if (regx.test(fname))
    {
        document.getElementById("lasttnameprompt").innerHTML = "Accepeted";
        document.getElementById("lasttnameprompt").style.color = 'green';
        return true;
    }
    else
    {
        document.getElementById("lasttnameprompt").innerHTML = "Please enter at least 2 characters!";
        document.getElementById("lasttnameprompt").style.color = 'red';
        return false;
    }

}
function vlaid_password1()
{
    var fname = document.getElementById("passw1").value;
    if(fname == "")
    {
        document.getElementById("passward1").innerHTML = "Please enter a password";
        document.getElementById("passward1").style.color= 'red'
    }
    else
    {
        document.getElementById("passward1").innerHTML = "Accepted";
        document.getElementById("passward1").style.color = 'green';
    }
}
function vlaid_password2()
{
    var fname = document.getElementById("passw2").value;
    if (fname == "")
    {
        document.getElementById("paasward2").innerHTML = "Please enter a password";
        document.getElementById("paasward2").style.color = 'red';
    }
    else
    {
        document.getElementById("paasward2").innerHTML = "Accepted";
        document.getElementById("paasward2").style.color = 'green'
    }

}

function validateForm()
{
    var pass1 = document.getElementById("passw1").value;
    var pass2 = document.getElementById("passw2").value;
    if( pass1 == pass2)
    {
        alert("Successful match!");
        return true;
    }
    else
    {
        alert("Passwords muust match!");
        return false;
    }
}