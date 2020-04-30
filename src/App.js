import React from 'react';
import {fetchData} from './api';
import image from './images/logo.png';
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
      country:'',

    }

  }
  
  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({
      data:fetchedData

    });

  }

  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
   // console.log(fetchedData);
   this.setState({
     data:fetchedData,
     country:country
   })

  }

  render(){
    return(
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="Covid-19"/>
      <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>
      <h2 className={styles.name}> Developed by &nbsp; <a target="blank" href="https://www.linkedin.com/in/pawansinghla300/">Pawan Singhla</a> </h2>
      
      </div>
    )
  }
}
export default App;
