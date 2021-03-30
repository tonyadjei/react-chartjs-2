import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const [chartData, setChartData] = useState({}); //inital value is an empty object

    const chart = () => {
        setChartData({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'Days of the week and their blablabla',
                data: [32,45,12,76,69],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderWidth: 4
            }],
        })
    }

    useEffect(() => {
        chart()
    }, [])
    return ( 
        <div className="LineChart">
            <h1>ChartJS is fun!</h1>
            <div style={{height: "500px", width: "500px"}}>
                <Line data={chartData} options={{
                    responsive: true, //this makes the chart fit the height and width of its container
                    title: {text: 'This is a line chart', display: true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: false,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }} />
            </div>
        </div>
     );
}

export default LineChart;