import './App.css';
import {Component} from 'react';
const key="9089186cf58c3f6edb2715df96895f63";
const link='https://www.superheroapi.com/api.php/3509433779090013/search/Aquaman';
class App extends Component{
  render(){
    fetch(link, {
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      
    })
    .then(response=>response.json())
    .then(responseJson =>{console.log(responseJson)})
    return(
    <div className="App">Hello</div>
      );

  }
}

export default App;
