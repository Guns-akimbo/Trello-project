const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let element = <h1>Hello,Muna</h1>
function MunaApp() {
    let darkMode = false;
    let darkStyle = {
        backgroundColor: "#333",
        color:"white",
        padding: 10
    };
    let lightStyle  = {
        backgroundColor: "yellow",
        color: "black",
        padding: 10
    };
    return <>
    <div style = {darkMode ? darkStyle: lightStyle}>
        <h1>Welcome to React!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita quam quaerat aliquid.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita quam quaerat aliquid.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita 
         quam quaerat aliquid.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita quam quaerat aliquid.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita quam quaerat aliquid.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita 
         quam quaerat aliquid.</p>
    </div>

</>
;
}
function FathiaApp() {
    return <>
    <div>
        <h2>Welcome to Fathia!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita quam quaerat aliquid.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita quam quaerat aliquid.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Distinctio in voluptate ut sapiente fugiat nam unde, dicta optio vel,
         quibusdam voluptas ratione similique nesciunt minus. Impedit expedita 
         quam quaerat aliquid.</p>
    </div>
</>
}
function MyApp() {
    return <>
    <MunaApp/>
    <FathiaApp/>
</>;
}

   

root.render(<MyApp/>);