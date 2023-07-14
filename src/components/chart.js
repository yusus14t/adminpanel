import React, { Component } from 'react'
import { Doughnut } from "react-chartjs-2";
import ApiData from '../ApiData';

export default class chart extends Component {
    constructor(props){
        super(props);
        this.state= {
            chart : []
        }
    }
    componentDidMount(){
        let data =ApiData();
        data.then((d)=>{
            this.setState({
              chart: d.dasbhoardPage,
            });
        })

    }
  render() {
    return (
      <div>chart</div>
    )
  }
}
