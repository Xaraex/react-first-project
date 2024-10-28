import React from 'react';
import Chart from '../Chart/Chart';  // Updated to match uppercase folder

const ExpensesChart = (props) => {
    console.log('ExpensesChart props:', props);  // Debug log
    
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    if (props.expenses && props.expenses.length > 0) {
        for (const expense of props.expenses) {
            const expenseMonth = expense.date.getMonth();
            chartDataPoints[expenseMonth].value += expense.amount;
        }
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;