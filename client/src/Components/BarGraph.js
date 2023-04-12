import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarGraph({title, dataGraph, labels}) {

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: dataGraph,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

      
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: title,
          },
        },
      };
      
  return <div className='max-h-64'>
    <Bar options={options} data={data} height={180} width={350}/>
  </div>
}

