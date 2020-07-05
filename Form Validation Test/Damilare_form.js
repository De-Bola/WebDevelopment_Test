function givenNames1()
{
    var famName = document.getElementById("givenNames").value; //user input
    var given = /^[A-Za-z\s\'\-]{2,15}$/; //Test for the pattern 2 min and 15 max chara
    if(given.test(famName))
    {
        document.getElementById("givennamePrompt").innerHTML="Accepted";
        document.getElementById("givennamePrompt").style.color="green";
        return true;
    }
    else
    {
        document.getElementById("givennamePrompt").innerHTML="At least 2 characters only";
        document.getElementById("givennamePrompt").style.color="red";
        return false;
    }
}

function surName()
{
    var father = document.getElementById("surnames").value;
    var check = /^[A-Za-z\s\'\-]{2,20}$/;//Test for the pattern 2 min and 20 max chara
    if(check.test(father))
    {
        document.getElementById("surname").innerHTML="Accepted";
        document.getElementById("surname").style.color="green";
        return true;
    }
    else
    {
        document.getElementById("surname").innerHTML="At least 2 chracters only!";
        document.getElementById("surname").style.color="red";
    }
}

function checkCountry()
{
    var userInput = document.getElementById("Country1").value;
    if(userInput == "Germany" || userInput == "France")
    {
       document.getElementById("brth").innerHTML = "Accepted";
       document.getElementById("brth").style.color="green";
    }
    else
    {
        document.getElementById("brth").innerHTML = "Germany / France only!";
        document.getElementById("brth").style.color="red";
    }
}

function checkCity()
{
    var usercity = document.getElementById("cityBirth").value;
    if(usercity == "Berlin" || usercity == "Paris")
    {
       document.getElementById("city").innerHTML = "Accepted";
       document.getElementById("city").style.color="green";
    }
    else
    {
        document.getElementById("city").innerHTML = "Berlin / Paris only!";
        document.getElementById("city").style.color="red";
    }
}

function submit_Application()
{
    var commonName = document.getElementById("givenNames").value;
    var fatherName = document.getElementById("surnames").value;
    var applicant = commonName + " " + fatherName;
    var coun = document.getElementById("Country1").value;

    document.getElementById("Application").innerHTML = "<h2>Application submitted</h2>";
    document.getElementById("Application").innerHTML += "<p>" + applicant + "</br>" + coun + "</p>";
}