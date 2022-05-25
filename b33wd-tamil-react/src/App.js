import "./App.css";

export default function App() {
  // const name1 = "san";
  // const name2 = "ajith";
  
  
  return (
    <div className="App">
      <Msg
        name="prasanth"
        pic="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Msg
        name="san"
        pic="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
      />
      <Msg
        name="Ajith"
        pic="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
      />

      <h1>Hello B33 WD Tamil 💕</h1>
      {/* <h2>Hi {name1} ❤️😘</h2> */}
      {/* <h2>Hi {name2} ❤️😘</h2> */}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function Msg(props) {
  // const name = "Prasanth";

  return (
    <div>
      <h2>Hi {props.name}</h2>
      <img className="profile-pic" src={props.pic} alt={props.name} />
    </div>
  );
}