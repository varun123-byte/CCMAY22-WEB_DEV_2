function validate()
{
var email=document.fname.email.value;
var password=document.fname.password.value;
if(email==null ||email=="")
{
    alert("email cant be blank");
    return false;
}
else if(password.length<6)
{
    alert("password must be less than 6 characters");
    return false;
}
}