import React from 'react';
import  { ShimmerSectionHeader,ShimmerDiv, ShimmerTitle } from "shimmer-effects-react";
function Shimmer() {
  return (
    <>
    <ShimmerSectionHeader center={true} mode="light" />
    <ShimmerTitle center={false} mode='light' />
    <div className='ShimmerDiv' style={{display:'flex'}}>
    <ShimmerDiv center={true} height={100} width={100} mode='light' />
    <ShimmerDiv center={true} height={100} width={100} mode='light' />
    <ShimmerDiv center={true} height={100} width={100} mode='light' />
    <ShimmerDiv center={true} height={100} width={100} mode='light' />
    </div>
    </>
  )
}

export default Shimmer