
import './App.css';

function App1() {

  const Details = [
    {
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Eternals_%28film%29_poster.jpeg/220px-Eternals_%28film%29_poster.jpeg",
      name: "Eternals",
      rating: "⭐8.2",
      content: "Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,it is the 26th film in the Marvel Cinematic Universe (MCU).",
    },
    {
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Eternals_%28film%29_poster.jpeg/220px-Eternals_%28film%29_poster.jpeg",
      name: "Eternals",
      rating: "⭐8.2",
      content: "Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,it is the 26th film in the Marvel Cinematic Universe (MCU).",
    },
  ]
  return (
   <div className="app">
     {Details.map((detail) => {
       <Msg pic={detail.pic} name={detail.name} rating={detail.rating} content={detail.content} />
     } )}
   </div>
  );
}

function Msg({pic,name,rating,content}) {
  return (
      <div>
      <img className="movie-pic" src={pic} alt={name} />      
      <h1> {name} {rating} </h1>
      <p> {content} </p>
      </div>
  )
}
