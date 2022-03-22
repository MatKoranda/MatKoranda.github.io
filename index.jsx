function App(){
    const [expression,setExpression]= React.useState("0")
    const [answer,setAnswer]=React.useState('0')
    const testArrray=expression.split(/[/*+-]/)
    const display=(symbol)=>{
        if (/[0-9-]/.test(symbol)){
            setExpression(prev =>prev+symbol)
            setAnswer(prev =>prev+symbol);
        }
        if(symbol=="." && !/[\.]/.test(testArrray[testArrray.length-1])){
            setExpression(prev =>prev+symbol)
            setAnswer(prev =>prev+symbol);
        }
        if(/[/*+]/.test(symbol) ){
            if(/[/*+-]/.test(expression[expression.length-1])){
                setExpression(prev =>prev.replace(/[/*+-]+$/,symbol))
                setAnswer(prev =>prev.replace(/[/*+-]+$/,symbol))

            }
            else{
             setExpression(prev =>prev+symbol);
            setAnswer(prev =>prev+symbol);   
            }
            
            
        }
        
        
        
        if(expression[expression.length-1]=="="){
            if(/[1-9.]/.test(symbol)){
                setExpression(symbol)
                setAnswer(symbol)
            }
            else{
                setExpression(answer+symbol)
                setAnswer(expression)
            } 
        }
        if(expression.length==1 && expression[expression.length-1]=="0"){
            setExpression(symbol);
            setAnswer(symbol);
        }

    };
    const clear=()=>{
        setExpression("0")
        setAnswer("0")
    }
    const calculate=()=>{
        setAnswer(eval(expression))
        setExpression(prev =>prev+"=")
    }



    return (
    <div className="container">
        <div className="grid">
            <div id="display" className="display dis"> <input  type="text" value={expression} placeholder="0" />
                <div className="total"> {answer}
                </div>
            </div>
            <div id="clear" onClick={clear} className="padButton AC">AC</div>

            <div id="divide" onClick={()=>display("/")} className="padButton div">/</div>
            <div id="multiply" onClick={()=>display("*")} className="padButton *">*</div>
            <div id="seven" onClick={()=>display("7")} className="padButton seven">7</div>
            <div id="eight" onClick={()=>display("8")} className="padButton eight">8</div>
            <div id="nine" onClick={()=>display("9")} className="padButton nine">9</div>
            <div id="subtract" onClick={()=>display("-")} className="padButton minus">-</div>
            <div id="four" onClick={()=>display("4")} className="padButton four">4</div>
            <div id="five" onClick={()=>display("5")} className="padButton five">5</div>
            <div id="six" onClick={()=>display("6")} className="padButton six">6</div>
            <div id="add" onClick={()=>display("+")} className="padButton plus">+</div>
            <div id="one" onClick={()=>display("1")} className="padButton one">1</div>
            <div id="two" onClick={()=>display("2")} className="padButton two">2</div>
            <div id="three" onClick={()=>display("3")} className="padButton three">3</div>
            <div id="equals" onClick={calculate} className="padButton equals">=</div>
            <div id="zero" onClick={()=>display("0")} className="padButton zero">0</div>
            <div id="decimal" onClick={()=>display(".")} className="padButton dot">.</div>
        </div>
    </div>)
}

ReactDOM.render(<App/>,document.getElementById("root"))