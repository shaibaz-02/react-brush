
import { CORE_CONCEPTS,EXAMPLES } from "./data";
import Header from './components/Header';
import Coreconcept from "./components/Coreconcept";
import TabButton from './components/TabButton';
import { useState } from "react";
import Topics from "./components/Topics";




function App() {

  const [tabSelect,updatetabSelect]=useState();

  function handleSelect(selectedButton){
    // console.log(selectedButton)
    updatetabSelect(selectedButton);
  }

  let tabContent=<p>please select a topic.</p>
  if(tabSelect){
    tabContent=(
      <div id='tab-content'>
            <h3>{EXAMPLES[tabSelect].title}</h3>
            <p>{EXAMPLES[tabSelect].description}</p>
            <pre>
                <code>
                    {EXAMPLES[tabSelect].code.trim()}
                </code>
            </pre>
        </div>
    );
  }



  return (
    <div>
      <Header/>
       <main>
      <section id="core-concepts">
        <h2>core concepts</h2>
        <ul>

          {
            CORE_CONCEPTS.map((concept)=>(
              <Coreconcept key={concept.title} {...concept}/>
            ))
          }
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={tabSelect==="components"} onSelect={()=> handleSelect("components")}>Components</TabButton>
          <TabButton isSelected={tabSelect==="jsx"} onSelect={()=> handleSelect("jsx")}>JSX</TabButton>
          <TabButton isSelected={tabSelect==="props"} onSelect={()=> handleSelect("props")}>Props</TabButton>
          <TabButton isSelected={tabSelect==="state"} onSelect={()=> handleSelect("state")}>State</TabButton>
        </menu>
        {/* <Topics {...EXAMPLES[tabSelect]}/> */}
        {tabContent}
      </section>
      </main>
    </div>
  );
}

export default App;
