import TrafficLight from "./TrafficLight";
const App = () =>{
  return (
  <div>
  <h1 style={{textAlign: 'center'}}>Traffic Light System</h1>
    <div style={{display: 'flex', justifyContent: "center"}}>
    <TrafficLight/>
    </div>
  </div>
  )
}

export default App;