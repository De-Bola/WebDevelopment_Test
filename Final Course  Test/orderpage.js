function valid_fname()
{
    var fname = document.getElementById("customer_name").value;
    var regx = /^[A-Za-z\s\'\-]{2,15}$/; // checks the user input (2 is the min and 15 is the max) 
    if (regx.test(fname))
    {
        document.getElementById("info1").innerHTML = "Accepted";
        document.getElementById("info1").style.color = 'green';
        return true;
    }
    else
    {
        document.getElementById("info1").innerHTML = "Please enter  a valid name";
        document.getElementById("info1").style.color = 'red';
        return false;
    }
}
function valid_address()
{
    var fname = document.getElementById("customer_address").value;
    var regx = /^[A-Za-z\s\'\-]{2,15}$/; // checks the user input (2 is the min and 15 is the max) 
    if (regx.test(fname))
    {
        document.getElementById("info2").innerHTML = "Accepted";
        document.getElementById("info2").style.color = 'green';
        return true;
    }
    else
    {
        document.getElementById("info2").innerHTML = "Please enter  a valid name";
        document.getElementById("info2").style.color = 'red';
        return false;
    }
}