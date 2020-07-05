function checkfiled1()
{ // test input for 2-15 allowed characters
    var field = document.getElementById("firstName").value;
    var regx1 = /^[A-Za-z\s\'\-]{2,15}$/;
    if(regx1.test(field))
    {
        document.getElementById("firstNamePrompt").innerHTML="Accepted"
        document.getElementById("firstNamePrompt").style.color="green";
        return true;
        
    }
    else
    {
        document.getElementById("firstNamePrompt").innerHTML="2-15 characters";
        document.getElementById("firstNamePrompt").style.color="red";
        return false;
    }
}

function checkfield2()
{ // test input for 2-15 allowed characters
    var field = document.getElementById("lastName").value;
    var regx2 = /^[A-Za-z\s\'\-]{2,25}$/;
    if (regx2.test(field))
    {
        document.getElementById("lastNamePrompt").innerHTML="Accepted!";
        document.getElementById("lastNamePrompt").style.color= "green";
        return true;
    }
    else
    {
        document.getElementById("lastNamePrompt").innerHTML="2-25 characters";
        document.getElementById("lastNamePrompt").style.color="red";
        return false;
    }
}

function checkfield3()
{
    var field = document.getElementById("phoneNumber").value;
    var regx3 = /^\d{3}-\d{3}-\d{4}$/; //check the pattern of the given phone number
    if (regx3.test(field))
    {
        document.getElementById("pnoneNumberPrompt").innerHTML="Accepted!"
        document.getElementById("pnoneNumberPrompt").style.color="Green"
    }
    else
    {
        document.getElementById("pnoneNumberPrompt").innerHTML="Please enter a valid number";
        document.getElementById("pnoneNumberPrompt").style.color="red";
    }
}

// function checkfiled4()
// {
//     var field = document.getElementById("quantity").value;
//     var regx4 = /^[0-9](9)$/;
//     if(regx4.test(field))
//     {
//         document.getElementById("quantityPromt").innerHTML="Accepted!";
//         document.getElementById("quantityPromt").style.color="green";
//     }
//     else
//     {
//         document.getElementById("quantityPromt").innerHTML="10 quantity per order!";
//         document.getElementById("quantityPromt").style.color= "red"
//     }
// }

function calcOrder()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phoneNumber").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("Price").value;

    document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary:</h2> ";
    document.getElementById("orderConfirm").innerHTML +="<p>"+ userName + "</br>" + phone + "</p>";
    document.getElementById("orderConfirm").innerHTML +="<p> Order Total: $" + price * quantity + "</p>";
}