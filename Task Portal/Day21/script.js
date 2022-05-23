let timer = document.createElement("div");
timer.setAttribute("id","main");
document.body.append(timer);

var i =11;
setTimeout(() => {
    document.getElementById("main").innerHTML="Countdown Starts Now";

setTimeout(() => {
        i--;
        document.getElementById("main").innerHTML= i;
        setTimeout(() => {
            i--;
            document.getElementById("main").innerHTML= i;
            setTimeout(() => {
                i--;
                document.getElementById("main").innerHTML= i;
                setTimeout(() => {
                    i--;
                    document.getElementById("main").innerHTML= i;
                    setTimeout(() => {
                        i--;
                        document.getElementById("main").innerHTML= i;
                        setTimeout(() => {
                            i--;
                            document.getElementById("main").innerHTML= i;
                            setTimeout(() => {
                                i--;
                                document.getElementById("main").innerHTML= i;
                                setTimeout(() => {
                                    i--;
                                    document.getElementById("main").innerHTML= i;
                                    setTimeout(() => {
                                        i--;
                                        document.getElementById("main").innerHTML= i;
                                        setTimeout(() => {
                                            i--;
                                            document.getElementById("main").innerHTML= i;
                                            setTimeout(() => {
                                                i--;
                                                document.getElementById("main").innerHTML= "Happy Independence Day";
                                            }, 1300);
                                        }, 1300);
                                    }, 1300);
                                }, 1300);
                            }, 1300);
                        }, 1300);
                    }, 1300);
                }, 1300);
            }, 1300);
        }, 1300);
    }, 1300);
}, 1300);