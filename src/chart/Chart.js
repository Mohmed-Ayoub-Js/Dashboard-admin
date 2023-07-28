import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './chart.css'

const data = [
    {name: 'ماي', uv: 200, pv: 250, amt: 300},
    {name: 'جوان', uv: 15598, pv: 8700, amt: 27800},
    {name: 'جويلية', uv: 10598, pv: 29700, amt: 24007},


];

const RenderLineChart = () => {
    return(
      <div className='chart-online'>

  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} className='chart'>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>        
      </div>

    )
}
        

export default RenderLineChart;