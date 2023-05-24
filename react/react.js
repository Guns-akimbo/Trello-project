const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Cards = ({text1, text2, num, color})=> {
    return(
        <>
        <div className="cardtop1" style={{background: color}}>
            <p>{text1}</p>
            <h1>{text2}</h1>
            <span><h1>{num}</h1></span>
        </div>
        </>
    )

}



function MyApp() {
    return (
        <>
        <div className="mainbody">
            <div className="mainbodywrapper">
                <div className="header">
                    <div className="header1">
                        <h1> Ettrics</h1>
                        <h3>Goggle New Input Info Cards</h3>
                    </div>
                </div>
                <div className="cardbody">
                    <div className="cardbodywrapper">
                    <div className="top">
                        <Cards text1="Tony" text2="Romo" num="9" color="blue" texts/>
                        <Cards text1="Tony" text2="Romo" num="9" color="green"/>
                        <Cards text1="Tony" text2="Romo" num="9" color="gold"/>
                       
                    </div>
                    <div className="bottom">
                        <Cards text1="Robert" text2="Lewandoski" num="9" color="tomato"/>
                        <Cards text1="Curve" text2="Africa" num="9" color="blue"/>
                        <Cards text1="Victor" text2="Oshimen" num="9" color="goldenrod"/>
                        
                    </div>
                    </div>
                    
                </div>
            </div>

        </div> 
        </>
    )
}

root.render(<MyApp/>);
