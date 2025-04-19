
import './style.css';
import { Chart } from 'chart.js/auto';

const ctx = document.getElementById('heatmap').getContext('2d');

const data = {
    labels: ['BTC', 'ETH', 'DASH', 'ZEC', 'XMR'],
    datasets: [{
        label: 'Influence Score',
        data: [67, 45, 28, 22, 35],
        backgroundColor: function(context) {
            const value = context.dataset.data[context.dataIndex];
            const alpha = value / 100;
            return `rgba(0, 123, 255, ${alpha})`;
        },
        borderColor: '#000',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Litecoin vs Competitors - Influence Heatmap'
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
};

new Chart(ctx, config);
