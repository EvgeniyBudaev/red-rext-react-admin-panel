export  const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                font: {
                    size: 18
                }
            }
        },
        y: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                display:  false
            }
        }
    },
    borderRadius: 15,
    borderSkipped: false,
    barThickness: 60,
    plugins: {
        tooltip: {
            bodyColor: '#222',
            backgroundColor: '#FFF',
            titleColor: '#111',
            titleFont: {
                size: 18,
                weight:  500
            },
            bodyFont: {
                size:  16
            },
            titleAlign: 'center',
            padding: 12,
            displayColors: false,
            yAlign: 'bottom',
            callbacks: {
                label: function (context: any) {
                    if  (context.parsed.y !== null) {
                        return context.parsed.y.toLocaleString('ru-Ru')
                    }
                }
            }
        }
    }
}