function validation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var age = document.getElementById("age").value;
    var field = document.getElementById("field").value;
    var qual = document.getElementById("qualification").value;
    var exp = document.getElementById("experience").value;


    var gender = document.getElementsByName("gender").value;



    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     //validations
     if(name == "")
     {
         alert("please enter the name");
         document.getElementById("name").focus();
         return false;
     }
     if(name != "")
     {
        for(let i = 0;i<name.length;i++)
        { 
            //Anurag
           if(name.charAt(i)>= 'A' && name.charAt(i) <= 'Z'  ||  name.charAt(i)>= 'a' && name.charAt(i) <='z' || name.charAt(i) == ' ')
           {
   
           }
           else
           {
               alert("invalid name! please Enter character only");
               document.getElementById("name").focus();
               return false;
           }
        }
     }
    if(gender == "")
    {
        alert("please select any of the one gender!!!");
        return false;
    }
     if (mailformat.test(email))
     {
        
     }
     else
     {
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus();
        return (false);
     }
     if(phonenumber == "")
     {
         alert("please enter the phone number!!!");
         document.getElementById("phonenumber").focus();
         return (false)
     }
     if(phonenumber != "")
     {
         if(phonenumber.length == 8 ||  phonenumber.length == 10 )
         {     
         }
         else
         {
            alert("phone number should have either length of 8 digts or 10 digits");
            document.getElementById("phonenumber").focus();
            return (false)
         }
        
     }
     if(age == "")
     {
         alert("please enter the age!!!");
         document.getElementById("age").focus();
         return (false)
     }
     if(field == "none")
     {
         alert("please choose any of the one field");
         document.getElementById("field").focus();
         return false;
     }
     if(qual == "")
     {
         alert("please enter the correct qulalification");
     }
     if(qual != "")
     {
        for(let i = 0;i<qual.length;i++)
        { 
            //Anurag
           if(qual.charAt(i)>= 'A' && qual.charAt(i) <= 'Z'  ||  qual.charAt(i)>= 'a' && qual.charAt(i) <='z' || qual.charAt(i) == ' ')
           {
           }
           else
           {
               alert("invalid Qualification! please Enter character only");
               document.getElementById("qualification").focus();
               return false;
           }
        }
     }
    if(exp == "" )
    {
        alert("exprience  field cannot left blank!!!");
        document.getElementById("experience").focus();
        return false;
    }
    if(exp != "")
    {
        for(let i=0;i<exp.length;i++)
        {
            if(exp.charAt(i) >= '0' && exp.charAt(i) <= '9')
            {
            }
            else
            {
                alert("exprience  field cannot contains characters!!!");
                document.getElementById("experience").focus();
                return false;
            }
        }
    }
    exp1 = parseInt(exp);
    if(exp1 > 3)
    {
        alert("Not eligiable!!! Sorry");
        document.getElementById("experience").focus();
        return false;

    }
    
    //alert(name+" "+email+" "+phonenumber+" "+age+" "+qual+" "+field+" "+exp);
}