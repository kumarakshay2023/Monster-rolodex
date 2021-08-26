import React,{Component} from 'react';
import './App.css';

import { Cardlist } from './component/card-list/card-list';
import { SearchBox } from './component/search-box/search-box.componenet';

class App extends Component{
  constructor(){
    super();
    this.state={
       monsters:[
        
       ],
       searchfeild:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
     .then(users=>this.setState({monsters: users}));
  
  }
  render(){
   const {monsters,searchfeild}=this.state;
   const filteredmonster=monsters.filter(monster=>
       monster.name.toLowerCase().includes(searchfeild.toLowerCase())
   );
     return(
       <div className='App'>
         <h1 className='heading'>Monster Rolodex</h1>
         <SearchBox placeholder='Search your monster' field={e=>this.setState({searchfeild:e.target.value})}/>
         <Cardlist monsters={filteredmonster} />
         </div>
     );
     }
    }

export default App;
