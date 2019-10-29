import React from "react";
import Info from "./components/info";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {


  state = {
    name: undefined,
    full_name: undefined,
    error: undefined
    
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    const rep = e.target.elements.rep.value;
    const api_url = await
      fetch(`https://api.github.com/search/repositories?q=${rep}`)
    const data = await api_url.json();
    console.log(data);
   
   
      let i = 0;
      while (i < 20) { 
        this.setState({
          name: data.items[`${i}`].name,
          full_name: data.items.full_name,
          error: "",
          
        });
        i++;
        
        
       
      }
    ;console.log (i)
    
  }
  render() {
    return (
      <div>
        <Form weatherMethod={this.gettingWeather} />
        <Info />

        <Weather
          name={this.state.name}
          full_name={this.state.full_name}
          error={this.state.error} />


      </div>
    );
  }
}
export default App;
