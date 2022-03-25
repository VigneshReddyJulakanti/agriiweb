import logo from './logo.svg';
import './App.css';
import StartPage from './Components/StartPage';
import {  Routes, Route } from "react-router-dom";
import IndividualFarmerSignup from './Components/IndividualFarmerSignup'
import IndividualFarmerSignin from './Components/IndividualFarmerSignin'
import IndividualFarmerhome from './Components/IndividualFarmerhome';
import IndividualFarmerCropSelling from './Components/IndividualFarmerCropSelling';
import PSHome from './Components/PSbuyer/PSHome';
import PSBuyersignin from './Components/PSbuyer/PSBuyersignin';
import PSBuyersignup from './Components/PSbuyer/PSBuyersignup';
import PSBuyerCrop from './Components/PSbuyer/PScropBuy/PSBuyerCrop'
import NoteState from "./context/notes/NoteState"
import Indianmaphome from './Components/Indinamap/Indianmaphome';
import IndividualFarmerCarousal from './Components/IndividualFarmerCarousal';
import IndianmapTelangana from './Components/Indinamap/IndianmapTelangana'
function App() {
  return (
<>
<NoteState>
<Routes>
<Route path="/" element={<StartPage />} />
<Route path="/individualfarmersignup" element={<IndividualFarmerSignup />} />
<Route path="/individualfarmersignin" element={<IndividualFarmerSignin />} />
<Route path='/individualfarmerhome' element={<IndividualFarmerhome/>}>
<Route path="/individualfarmerhome/indianmap" element={<Indianmaphome/>}/>
<Route path="/individualfarmerhome/carousal" element={<IndividualFarmerCarousal/>}/>
<Route path="/individualfarmerhome/telangana" element={<IndianmapTelangana/>}/>

<Route path='/individualfarmerhome/individualfarmercropselling' element={<IndividualFarmerCropSelling/>}/>
</Route>


<Route path="/psbuyersignin" element={<PSBuyersignin/>}/>
<Route path="/psbuyersignup" element={<PSBuyersignup/>}/>

<Route path="/pshome" element={<PSHome/>}>
<Route path="/pshome/psbuyercrop" element={<PSBuyerCrop/>}/>
</Route>
</Routes>
</NoteState>
</>
  );
}

export default App;
