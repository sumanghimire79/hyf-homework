

/* erercise  Formal fullname */



function getFullname(fullname1, fullname2, useFormalName, gender ){
    let fullName = fullname1 + fullname2 + useFormalName + gender;
    
        if (useFormalName && gender == "male"){
            fullName = "Lord " + fullname1 + fullname2 + " " + gender;

        } else if (useFormalName && gender == "female"){
                fullName = "Miss " + fullname1 + fullname2 + " " + gender ;
        }else if (!useFormalName && gender == "male"){
            fullName =  fullname1 + fullname2 + " " + gender ;
    } else {
        fullName = fullname1 + fullname2 + " " + gender ;
}
        return fullName;
    }

    // passing all possible four conditions using same name for example:
    var myFullName = getFullname("Suman", " Ghimire", true , "male" );
    console.log (myFullName);
    var mySonsFullName = getFullname("Suman", " Ghimire", true, "female");
    console.log (mySonsFullName);
    var myFullName = getFullname("Suman", " Ghimire", false , "male" );
    console.log (myFullName);
    var mySonsFullName = getFullname("Suman", " Ghimire", false, "female");
    console.log (mySonsFullName);