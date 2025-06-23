import { useState } from "react"
import { EXAMPLES } from "../data"
import TabButton from "./TabButton"
import Section from "./Section"
import Tabs from "./Tabs"

export default function Examples(){
    const [tabSelect,settabSelect]=useState()
    let tabContent=<p>please select a topic</p>
    function handleSelect(selectedButton){
        settabSelect(selectedButton)
    }
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
   
    return(
        <>
        <Section title="Examples" id="examples">
            <Tabs buttons={ <>
                <TabButton isSelected={tabSelect==="components"} onSelect={()=> handleSelect("components")}>Components</TabButton>
                  <TabButton isSelected={tabSelect==="jsx"} onSelect={()=> handleSelect("jsx")}>JSX</TabButton>
                  <TabButton isSelected={tabSelect==="props"} onSelect={()=> handleSelect("props")}>Props</TabButton>
                  <TabButton isSelected={tabSelect==="state"} onSelect={()=> handleSelect("state")}>State</TabButton>
                 </>
                }>
            {tabContent}
        </Tabs>
        </Section>
        </>
    )
}