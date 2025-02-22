/* naveen javascript file starts here */
const ctx = document.getElementById('radarChart').getContext('2d');

const skillPercentages = [90, 80, 79, 80, 85, 80, 95]; 

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Python', 'JavaScript', 'Networking', 'Cybersecurity', 'C', 'Bug Bounty', 'SQL'],
        datasets: [{
            label: 'Skill Level',
            data: skillPercentages, 
            borderColor: 'orange',  // Pale orange skill lines
            borderWidth: 3,
            backgroundColor: 'rgba(255, 165, 0, 0.2)',  // Light orange fill
            pointBackgroundColor: 'orange',  // Pale orange points
            pointBorderColor: 'orange',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        animation: false,
        plugins: {
            legend: { display: false },
            tooltip: { 
                enabled: true,
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        },
        scales: {
            r: {
                angleLines: { color: 'grey' }, 
                grid: { color: 'grey', lineWidth: 2 }, // Keep the polygonal lines
                pointLabels: { color: 'white', font: { size: 14, weight: 'bold' } },
                min: 0, 
                max: 100,
                ticks: { 
                    display: false, // Removes only the numbers inside the chart
                    stepSize: 20 // 100 divided by 7 steps = ~14.29
                }
            }
        }
    }
});
/* end here */