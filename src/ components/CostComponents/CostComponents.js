import React from 'react';

import {CostItemComponents} from "../CostItemComponents";
import './Cost.css'
import {CardComponents} from "../CardComponents";


const CostComponents = ({cost}) => {


    return (
        <CardComponents className={'costs'}>
        <div>
            <CostItemComponents date={cost[0].date} description={cost[0].description} amount={cost[0].amount}/>
            <CostItemComponents date={cost[1].date} description={cost[1].description} amount={cost[1].amount}/>
            <CostItemComponents date={cost[2].date} description={cost[2].description} amount={cost[2].amount}/>
        </div>
        </CardComponents>
    );
};

export {CostComponents};