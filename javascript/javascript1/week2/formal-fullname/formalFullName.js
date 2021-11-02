

/* erercise  Formal fullname */



function getFullname(fullname1, fullname2, useFormalName ){
    let fullName = fullname1 + fullname2 + useFormalName;
       
        if (useFormalName){
            fullName = "Lord " + fullname1 + fullname2 ;

        }else {
            fullName = fullname1 + fullname2 ;
        }
        return fullName;
    }
    var myFullName = getFullname("Suman", " Ghimire", true);
    console.log (myFullName);
    var mySonsFullName = getFullname("Aayam", " Ghimire", false);
    console.log (mySonsFullName);