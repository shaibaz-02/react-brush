import './Topics.css'

export default function Topics({title,description,code}){
    return(
        <div id='tab-content'>
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>
                    {code.trim()}
                </code>
            </pre>
        </div>
    )
}