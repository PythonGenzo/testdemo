// 1) prototype Inheritence

let object = {
    name: "san",
    city: "coimbatore",
    intro: function(){
        console.log(this.name + " from " + this.city);
    }
}

let object1 = {
    name: "Prasanth",
}

// print object its print "san from coimbatore"
// print object1 its print "prasanth"
// print object1 city its print "prasanth from coimbatore"
// this is called prototype inheritence


// 2) Difference between :

//     1) call method ,
//     2) apply method,
//     3) Bind method.

//     1) call method // Invoke the value directly
        const name = {
            firstname: "san",
            lastname: "prasanth",
        }

        const printFullName = function(hometown, state){
            console.log(this.firstname + "," + this.lastname + " from " + hometown + "," + state);
        }

        printFullName.call(name, "coimbatore", "tamilnadu");

        const name1 = {
            firstname: "Ajith",
            lastname: "Kumar",
        }


        //2) apply method: same as like call method, its take using the [list] to passing the value 
        
        printFullName.apply(name1, ["Erode", "tamilnadu"]);

        //3) bind method: its not directly invoke the method , its make copy of the methods
             
             const printMyName = printFullName.bind(name1, "Erode", "Tamilnadu" );
             console.log(printMyName); //its print the function
             printMyName(); // its print "Ajith Kumar from Erode, Tamilnadu"


