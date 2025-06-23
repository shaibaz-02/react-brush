export default function Tabs({children,buttons,...props}){
    return (
    <>
        <menu {...props}>
        {buttons}
         </menu>
          {children}
    </>
    )
}