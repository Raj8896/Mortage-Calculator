import React from 'react'
import Sildercompomponent from './common/Sildercompomponent'

const SliderSelect = ({data,setData}) => {
  return (
    <>
    <Sildercompomponent unit={"$"} min={1000} max={10000} defaultValue={data.homeValue} value={data.homeValue} step={100} lable="Home Value" onChange={(e,value)=>setData({...data,homeValue:value,downPayment:value*0.2,loanAmount:value*0.8})} />
    <Sildercompomponent unit={"$"} min={0} max={data.homeValue} defaultValue={data.downPayment} step={100} value={data.downPayment} lable="Down Payment" onChange={(e,value)=>setData({...data,downPayment:value,loanAmount:(data.homeValue-value)})}/>
    <Sildercompomponent unit={"$"} min={0} max={data.homeValue} defaultValue={data.loanAmount} step={100}  value={data.loanAmount} lable="Loan Amount" onChange={(e,value)=>setData({...data,loanAmount:value,downPayment:(data.homeValue-value)})}/>
    <Sildercompomponent unit={"%"} min={2} max={18} defaultValue={data.interestRate} step={0.5} value={data.interestRate} lable="Interest Rate" onChange={(e,value)=>setData({...data,interestRate:value})} />
    </>
  )
}
export default SliderSelect