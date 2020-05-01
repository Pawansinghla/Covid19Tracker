import React,{useState,useEffect} from 'react';
import {Line,Bar} from 'react-chartjs-2';
import {fetchDailyData} from '../../api';
import styles from './Chart.module.css';



const Chart=({data,country})=>{
    const[dailyData,setDailyData]=useState([]);
    useEffect(()=>{
    const fetchApI=async () => {
        setDailyData(await fetchDailyData());
    }
    fetchApI();
    },[]);



    const lineChart = (
      dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Confirmed',
              borderColor: 'red',
              backgroundColor:'rgba(200,0,0,0.2)',
              fill: true,
            }, {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: 'black',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              fill: true,
            },
            ],
          }}
        />
      ) : null
    );

    console.log(country)
const barChart=(
  data.confirmed 
  ?
  (<Bar 
    data={{
      labels:['Confirmed','Recovered','Deaths'],
      datasets:[{
        label:'People',
        backgroundColor:[
          'rgba(255,0,0,0.5)',
          'rgba(0,255,0,0.5)',
          'rgba(0,0,0,0.5)',
        ],
        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
      }]

    }}
    options={{
      legend:{display:false},
      title:{display:true,text:`Current state in ${country}`},

    }}


    />

  ):null
)

  
return(
    <div className={styles.container}>
{country? barChart:lineChart}

    </div>
)

}

export default Chart;