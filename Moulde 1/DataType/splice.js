// DataType





// object and Splice method
var studentname = {
    name:"san",
    age:26,
    city:"Coimbatore",
    }
    // Adding key and value to the object
    studentname.attendence=["mon","wed","thr"];
    console.log(studentname);

    // printing mon day on the object
    console.log(studentname.attendence[0]);

    // splice method adding
    studentname.attendence.splice(1,0,"tue");
    console.log(studentname.attendence);

    // splice with replace and adding
    studentname.attendence.splice(3,1,'fri');
    console.log(studentname.attendence);

    // splice delete
    studentname.attendence.splice(3,1);
    console.log(studentname.attendence);
    console.log(studentname);