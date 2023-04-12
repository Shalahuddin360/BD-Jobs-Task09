import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const marks = [
        { A: "A1", mark: 57 },
        { A: "A2", mark: 55 },
        { A: "A3", mark: 60 },
        { A: "A4", mark: 60 },
        { A: "A5", mark: 59 },
        { A: "A6", mark: 60 },
        { A: "A7", mark: 60 },
        { A: "A8", mark: 60 },
    ]
    return (
        <div className='container'>
        <h2 className='my-4 px-8  text-5xl font-bold'>Assignment Analytics</h2>
        <div className='flex font-semibold px-8 mt-7 mb-5 '  >
        <FontAwesomeIcon className='text-5xl mr-6'  icon={faStarAndCrescent}/>
            <div>
                <h3>58.88</h3>
                <p>Average Assignment Mark</p>
            </div>
        </div>
        <AreaChart
            width={1000}
            height={400}
            data={marks}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="A" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </div>
    );
};

export default Statistics;