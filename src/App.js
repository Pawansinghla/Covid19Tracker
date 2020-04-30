import React from 'react';
import {fetchData} from './api';
// import Cards from './component/Cards/Cards';
// import Chart from './component/Chart/Chart';
// import CountryPicker from './component/CountryPicker/CountryPicker';

import {Cards,Chart,CountryPicker} from './component';
import styles from './App.module.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{},

    }

  }
  
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({
      data:fetchedData

    });

  }

  render(){
    return(
      <div className={styles.container}>
      <Cards data={this.state.data}/>
      <CountryPicker/>
      <Chart/>
      <h2> Developed by Pawan Singhla</h2>
      
      </div>
    )
  }
}
export default App;
