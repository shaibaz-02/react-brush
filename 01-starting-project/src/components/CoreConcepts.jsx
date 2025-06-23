import { CORE_CONCEPTS } from "../data"
import Coreconcept from "./Coreconcept"

export default function CoreConcepts(){
    return(
        <>
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
      </>
    )
}