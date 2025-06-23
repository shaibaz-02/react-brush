
import { CORE_CONCEPTS,EXAMPLES } from "./data";
import Header from './components/Header';
import Coreconcept from "./components/Coreconcept";
import TabButton from './components/TabButton';
import { useState } from "react";
import Topics from "./components/Topics";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";




function App() {
  return (
    <div>
      <Header/>
       <main>
      <CoreConcepts/>
      <Examples/>
      </main>
    </div>
  );
}

export default App;
