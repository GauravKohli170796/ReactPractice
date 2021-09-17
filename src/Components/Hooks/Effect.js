import React,{useEffect,useState} from 'react'
import Counter from '../RenderProps/Counter'

function Effect() {
    const [Counter,setCounter]=useState(0);
    const [MousePosition,setMousePosition]=useState({x:0,y:0});


    function MouseMove(e)
    {
        setMousePosition({x:e.clientX,y:e.clientY})
    }

    useEffect(() => {
        console.log("UseEffect executing");
        document.addEventListener("mousemove",MouseMove);
        var countTimer=setInterval(() => {
            setCounter((preValue)=>{
                return preValue+1;
            });
            
        }, 1000);



        //Clean up corresponding to componentDidUnmount
        return () => {
            console.log("CleanUp running for UseEffect");
            document.removeEventListener("mousemove",MouseMove);
            clearInterval(countTimer);

            
        }
    },[])


        return (
            <>

              <div>
                  Count - {Counter}
              </div>  
              <div> 
                  Mouse Position X - {MousePosition.x}  Y- {MousePosition.y}
              </div>
  
            </>
    )
}

export default Effect
