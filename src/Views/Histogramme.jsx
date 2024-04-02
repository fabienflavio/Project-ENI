import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import { Chart as ChartJS } from 'chart.js/auto';
import {Bar } from "react-chartjs-2";
import axios from 'axios';


export default function Histogramme() {
    const [dataBackminmax,SetDataBackminmax] = useState([]) 
    axios.get("http://localhost:8088/api/v1/minMax")
    .then((res) => {
          SetDataBackminmax(res.data)
    }) 
  return (
    <>
        <Header />
            <div className='Container_histogramme'>
                <Bar 
                    data={{
                        labels:  ["Minimal","Maximal","Prix Total  de prêt"] ,
                        datasets:[
                            {
                                label  : "Histogramme de Payement ",
                                data :[dataBackminmax[2],dataBackminmax[0],dataBackminmax[1]] ,
                                backgroundColor:[
                                    "white",
                                ]
                            },
                           
                        ],
                    }}
                />
            </div>
        <Footer />
    </>
  )
}