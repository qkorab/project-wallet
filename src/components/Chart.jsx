
import React, { useState, useEffect } from 'react';
import '../styleComponents/Chart.scss';


import { AreaChart, Area, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 2000,
    pv: 3500,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 2900,
    pv: 3800,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2900,
    pv: 2900,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 3200,
    pv: 3900,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 3000,
    pv: 3900,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 4100,
    pv: 8498,
    amt: 6500,
  },
];

const Chart = () => {

const [activePeriod, setActivePeriod] = useState('day');

const priceData = {
    day: { lowerPrice: 100, highestPrice: 1000 },
    week: { lowerPrice: 200, highestPrice: 2000 },
    month: { lowerPrice: 300, highestPrice: 3000 },
    year: { lowerPrice: 400, highestPrice: 4000 }
  };

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
  };


  return (
    <div className='chart-card'>

        <div className="time-period-buttons">
        <button className={activePeriod === 'day' ? 'active' : ''} onClick={() => handlePeriodChange('day')}>Day</button>
        <button className={activePeriod === 'week' ? 'active' : ''} onClick={() => handlePeriodChange('week')}>Week</button>
        <button className={activePeriod === 'month' ? 'active' : ''} onClick={() => handlePeriodChange('month')}>Month</button>
        <button className={activePeriod === 'year' ? 'active' : ''} onClick={() => handlePeriodChange('year')}>Year</button>
      </div>
      <div className='line-chart-container'>

        <div className="high-low">
          <span className='lower'>Lower: ${priceData[activePeriod].lowerPrice}</span>
          <span className='higher'>Higher: ${priceData[activePeriod].highestPrice}</span>
          <span className='highest'>1BTC=$5483</span>
        </div>
            <div className='shadow-in-chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 24,
                            left: 10,
                            bottom: 70,
                        }}
                        >
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#f99d21"
                            fill="#ff8f17"
                            strokeWidth={5}
                        />
                        </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>    
    </div>
    
  );
};


export default Chart;
