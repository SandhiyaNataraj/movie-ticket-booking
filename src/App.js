import React from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UpcomingMovies from "./components/UpcomingMovies";
import UpPictures from "./components/UpPictures";
import Tamil from "./components/Tamil";
import English from "./components/English";
import Hindi from "./components/Hindi";
import Telugu from "./components/Telugu";
import Malayalam from "./components/Malayalam";
import Conjurin from "./components/Conjurin";
import FightClub from "./components/FightClub";
import Aalambana from "./components/Aalambana";
import Animal from "./components/Animal";
import Movies from "./components/Movies";
import Kannagi from "./components/Kannagi";
import Joe from "./components/Joe";
import Hi from "./components/Hi";
import Parking from "./components/Parking";
import Annapoorani from "./components/Annapoorani";
import Patti from "./components/Patti";
import Wonka from "./components/Wonka";
import Vivesini from "./components/Vivesini";
import Priscilla from "./components/Priscilla";
import Sam from "./components/Sam";
import Philips from "./components/Philips";
import Sri from "./components/Sri";
import ConjurinVideo from "./components/ConjurinVideo";
import Theedhum from "./components/Theedhum";
import Three from "./components/Three";
import Dunki from "./components/Dunki";
import Neru from "./components/Neru";
import Sallar from "./components/Sallar";
import Pradhan from "./components/Pradhan";
import Kabuliwala from "./components/Kabuliwala";
import Jigiri from "./components/Jigiri";
import MiriamMaa from "./components/MiriamMaa";
import Kaatera from "./components/Kaatera";
import Devil from "./components/Devil";
import Bubble from "./components/Bubble";
import Migration from "./components/Migration";
import Shaan from "./components/Shaan";
import Dhurva from "./components/Dhurva";
import Yathabava from "./components/Yathabava";
import T169 from "./components/T169";
import Star from "./components/Star";
import Ole from "./components/Ole";
import Engine from "./components/Engine";
import FightClubVideo from "./components/FightClubVideo";
import AalambanaVideo from "./components/AalambanaVideo";
import AnimalVideo from "./components/AnimalVideo";
import AnnapooraniVideo from "./components/AnnapooraniVideo";
import HiVideo from "./components/HiVideo";
import JoeVideo from "./components/JoeVideo";
import KannagiVideo from "./components/KannagiVideo";
import ParkingVideo from "./components/ParkingVideo";
import PattiVideo from "./components/PattiVideo";
import PriscillaVideo from "./components/PriscillaVideo";
import Rating from "./components/Rating";
import Format from "./components/Format";
import Stream from "./components/Stream";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
        path="/explore" 
        element=
        {
          <div>
        
        <UpcomingMovies />
        <UpPictures />
        </div>
        }/>
        <Route path="/tamil" element={<Tamil />}></Route>
        <Route path="/english" element={<English />}></Route>
        <Route path="/hindi" element={<Hindi />}></Route>
        <Route path="/telugu" element={<Telugu />}></Route>
        <Route path="/malayalam" element={<Malayalam />}></Route>
        <Route path="/kanada" element={<Malayalam />}></Route>
        <Route path="/conjurin" element={<Conjurin/>}></Route>
        <Route path="/fight" element={<FightClub/>}></Route>
        <Route path="/al" element={<Aalambana/>}></Route>
        <Route path="/animal" element={<Animal/>}></Route>
        <Route path="/movie" element={<Movies/>}></Route>
        <Route path="/kannagi" element={<Kannagi/>}></Route>
        <Route path="/joe" element={<Joe/>}></Route>
        <Route path="/hi" element={<Hi/>}></Route>
        <Route path="/park" element={<Parking/>}></Route>
        <Route path="/an" element={<Annapoorani/>}></Route>
        <Route path="/patti" element={<Patti/>}></Route>
        <Route path="/vi" element={<Vivesini/>}></Route>
        <Route path="/wonka" element={<Wonka/>}></Route>
        <Route path="/pris" element={<Priscilla/>}></Route>
        <Route path="/sam" element={<Sam/>}></Route>
        <Route path="/philips" element={<Philips/>}></Route>
        <Route path="/sri" element={<Sri/>}></Route>
        <Route path="/the" element={<Theedhum/>}></Route>
        <Route path="/3" element={<Three/>}></Route>
        <Route path="/dunki" element={<Dunki/>}></Route>
        <Route path="/neru" element={<Neru/>}></Route>
        <Route path="/salaar" element={<Sallar/>}></Route>
        <Route path="/pradhan" element={<Pradhan/>}></Route>
        <Route path="/kabu" element={<Kabuliwala/>}></Route>
        <Route path="/jig" element={<Jigiri/>}></Route>
        <Route path="/maa" element={<MiriamMaa/>}></Route>
        <Route path="/kaatera" element={<Kaatera/>}></Route>
        <Route path="/kd" element={<Devil/>}></Route>
        <Route path="/bubble" element={<Bubble/>}></Route>
        <Route path="/migration" element={<Migration/>}></Route>
        <Route path="/shaan" element={<Shaan/>}></Route>
        <Route path="/dhurva" element={<Dhurva/>}></Route>
        <Route path="/169" element={<T169/>}></Route>
        <Route path="/yatha" element={<Yathabava/>}></Route>
        <Route path="/star" element={<Star/>}></Route>
        <Route path="/ole" element={<Ole/>}></Route>
        <Route path="/engine" element={<Engine/>}></Route>
        <Route path="/conjurinv" element={<ConjurinVideo/>}></Route>
        <Route path="/fightv" element={<FightClubVideo/>}></Route>
        <Route path="/aalambanav" element={<AalambanaVideo/>}></Route>
        <Route path="/animalv" element={<AnimalVideo/>}></Route>
        <Route path="/anv" element={<AnnapooraniVideo/>}></Route>
        <Route path="/hiv" element={<HiVideo/>}></Route>
        <Route path="/joev" element={<JoeVideo/>}></Route>
        <Route path="/kannagiv" element={<KannagiVideo/>}></Route>
        <Route path="/parkingv" element={<ParkingVideo/>}></Route>
        <Route path="/pattiv" element={<PattiVideo/>}></Route>
        <Route path="/priscillav" element={<PriscillaVideo/>}></Route>
        <Route path="/rate" element={<Rating/>}></Route>
        <Route path="/format" element={<Format/>}></Route>
        <Route path="/stream" element={<Stream/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;


