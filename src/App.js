import "./App.css";
import { React } from "react";
import { NavInfo } from "./Components/NavInfo";
import  {ShowProvider} from "./Context/Show";
import  {SelectedProvider} from "./Context/Selected";

function App() {
  return (
    <div className="h-screen bg-[#92A49A]">
 <ShowProvider>
          <SelectedProvider>
    <NavInfo />
    </SelectedProvider>
    </ShowProvider>

    </div>
  );
}

export default App;
