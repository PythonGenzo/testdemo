const myForm = document.querySelector("#my-form");

const userDetails = document.createElement("div");
userDetails.className="user-details";
userDetails.innerHTML=`
<div id="user-input">
    <label>First Name</label><br>
    <input type=text id="fname"><br>
    <label>Last Name</label><br>
    <input type="text" id=""fname><br>
    <label>Address</label><br>
    <input type="text" id="address"><br>
    <label>PinCode</label><br>
    <input type="number" id="pin"><br>
    <label>Gender</label><br>
    <input type="radio" name="gender" value="male" id="gender">Male <br>
    <input type="radio" name="gender" value="female" id="gender">Female<br>
    <label>Favorite Food </label><br>
    <input type="checkbox" name="food1" id="food">Biriyani <br>
    <input type="checkbox" name="food2" id="food">Chappathi <br>
    <input type="checkbox" name="food3" id="food">Rice <br>
    <input type="checkbox" name="food4" id="food">Pizza <br>
    <input type="checkbox" name="food5" id="food">Burger <br>
    <label>State</label> <br>
    <input type="text" id="state"> <br>
    <label>Country</label> <br>
    <input type="text" id="country"> <br>

    <br><button>Submit</button>
</div>

<div id="form-result">
    <div id="form-one">First Name</div>
    <div id="form-two">Last Name</div>
    <div id="form-three">Address</div>
    <div id="form-four">PinCode</div>
    <div id="form-five">Gender</div>
    <div id="form-six">Favorite Food</div>
    <div id="form-seven">State</div>
    <div id="form-eight">Country</div>
</div>
`
myForm.append(userDetails);


const form = document.getElementById("my-form");
const input = document.querySelector("input");
const list = document.getElementById("form-one");

form.addEventListener("submit",(data)=> {
    data.preventDefault()
    createItem(input.value)
})

createItem = (d) => {
    let myresult = `<div>${d}</div>`
    list.insertAdjacentHTML("beforeend",myresult)
}






