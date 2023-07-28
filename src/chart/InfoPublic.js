import React from 'react'
import  FixedDrawerOfApplicationByAyoub  from '../global/Drawer'
import RenderLineChart from './Chart'
import DataTable from './Data'
import BasicTable from './Coun'
import CustomPaginationActionsTable from './Age'
import { Collapse } from '@mui/material';
import './chart.css'
const InfoPublic = () => {
  return (
    <div>
        <FixedDrawerOfApplicationByAyoub />
        <center>
        <RenderLineChart />
      <center>
      <h1>
          تعرف على كل تفاصيل عملك
        </h1>
      </center>   
        </center>
        <div className='containerApplication'>
          <center>
            <BasicTable />
            <CustomPaginationActionsTable />
            <Collapse />            
          </center>
        </div>
    </div>
  )
}

export default InfoPublic