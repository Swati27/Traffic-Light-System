import React, {useState, useEffect} from "react"


const TrafficLight = () => {

    const trafficlightColor = ['red', 'yellow', 'green']
    const [lightColor, setLightColor] = useState('red');
    const [disableLights, setDisableLights] = useState(true);

    const getColor = () => {
        switch(lightColor){
            case 'red': 
                setLightColor('green')
            break;
            case 'yellow':
                setLightColor('red')
            break;
            case 'green':
                setLightColor('yellow')
            break;    
        }
        
    }

    const disableTrafficLights = () => {
        setDisableLights(!disableLights)
        disableLights? setLightColor('black'): setLightColor('red')
    }
    const getTime = () => {
        switch(lightColor){
            case 'red': 
                 return 5000;
            break;
            case 'yellow':
                return 2000;
            break;
            case 'green':
                return 5000;
            break;    
        }
        
    }

    useEffect(()=>{
        if(disableLights)
        {
            let timer =  setTimeout(() => {
                getColor();
               }, getTime());
            return ()=> clearTimeout(timer);
        }
    },[lightColor,disableLights])
 return (
    <div>
{trafficlightColor.map((colorLight, index)=> {
    return <div key={index} style={{backgroundColor: colorLight === lightColor? colorLight: 'black', borderRadius: '25px', height: '50px', width: '50px'}}></div>
})}
<button style={{marginTop: '20px'}} onClick={()=> disableTrafficLights()}>Disable Traffic Light</button>
  </div>
    )
}

export default TrafficLight