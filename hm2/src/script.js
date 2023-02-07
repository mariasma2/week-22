
const ctx = document.getElementById('myChart-1');
const ctx2 = document.getElementById('myChart-2');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        datasets: [{
            label: 'Учебные часы в день',
            data: [8, 2, 6, 3, 1, 5, 7, 4],
            backgroundColor: 'rgb(99, 99, 132)',
            borderColor: 'rgb(255, 1, 128)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: [
            'Работа',
            'Учеба',
            'Институт',
            'Плавание',
            'Личная жизнь'
        ],
        datasets: [{
            label: 'Активность',
            data: [150, 50, 200, 55, 100],
            backgroundColor: [
                'rgb(99, 99, 132)',
                'rgb(54, 25, 235)',
                'rgb(54, 99, 70)',
                'rgb(29, 1, 102)',
                'rgb(30, 23, 54)'
            ],
            hoverOffset: 4
        }]
    }
});

