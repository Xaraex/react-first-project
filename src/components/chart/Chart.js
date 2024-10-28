import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    console.log('Chart props:', props);  // Debug log
    
    const dataPoints = props.dataPoints || [];
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = dataPointValues.length > 0 ? Math.max(...dataPointValues) : 0;

    return (
        <div className='chart'>
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;