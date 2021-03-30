import { Bar, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'top';

const BarChart = () => {
    return ( 
        <div>
            <Bar
                data={{
                    labels: ['The questions were easy', 'The questions were okay',
                'The questions were moderate', 'The questions were difficult'],
                    datasets: [{
                        label: 'Explanation frequencies',
                        data: [40, 20, 65, 80],
                        backgroundColor: ['cornflowerblue', 'pink', 'seagreen', 'yellowgreen'],
                        borderColor: ['cornflowerblue', 'pink', 'seagreen', 'yellowgreen'],
                        borderWidth: 1,
                    },{
                        label: 'Y, MY, MN, N Percentages',
                        data: [24, 56, 34 ,12],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={500}
                width={500} 
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    legend: {
                        labels: {
                            fontSize: 15
                        }
                    }
                }}
             />
        </div>
     );
}
 
export default BarChart;