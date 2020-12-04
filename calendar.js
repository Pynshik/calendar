const month = prompt('Введите месяц', 12) - 1;
const year = prompt('Введите год', 2020);

function createCalendar(month, year){
    const calendar = document.getElementById('calendar');
    const title = document.getElementById('title');
    const date = new Date (year, month);
    
    const options = {month: 'long'};
    const monthName = (Intl.DateTimeFormat('ru-RU', options).format(date)).split('');
    const bigLetter = monthName[0].toUpperCase();
    const remove = monthName.splice(0,1,bigLetter);
    title.innerHTML = `${monthName.join('')} ${year} года`

    let table = '<table><thead><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr></thead><tbody><tr>';
    
    for(let i = 0; i < getDay(date); i++){
        table += '<td></td>';
    }

    while(date.getMonth() == month){
        table += `<td>${date.getDate()}</td>`;
        
        if(getDay(date) == 6) {
            table += '<tr></tr>'
        }    

        date.setDate(date.getDate() + 1)
    }
    
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
          table += '<td></td>';
        }
    }
    table += '</tr></tbody></table>';
    calendar.innerHTML = table;
}

function getDay(date){
    let day = date.getDay();
    if(day == 0) {day = 7}
    return day - 1; 
}

createCalendar(month, year);
