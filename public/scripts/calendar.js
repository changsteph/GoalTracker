$(function(){
    const currDate = new Date(Date.now());
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth();
    let currYear = currDate.getFullYear();
    let selectedYear = currDate.getFullYear();
    let selectedMonth = currDate.getMonth();
    let selectedDay = currDate.getDate();
    

    const loadMonth = function(year, month, day){
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let blocks = $("td");
        let totalDays = new Date(year, month + 1, 0).getDate();
        let offset = new Date(year, month, 1).getDay() - 1;
        let newText = months[month] + " " + year;
        $("#month").text(newText);
        for (let i = 0; i < blocks.length; i++) {
            if(i > offset && i <= offset + totalDays){
                blocks[i].innerText = i - offset;
            } else{
                blocks[i].innerText = "";
            }
            // if (i === day + 1) {
            //     blocks[i].bgColor = 'aqua';
            // }
        }
        if (totalDays + offset < 35) {
            $('#extraWeek').hide();
        } else{
            $('#extraWeek').show();
        }
    };
    
    loadMonth(currYear, currMonth, currDay);
    $('#prevMonth').click(() => {
        selectedMonth -= 1;
        if(selectedMonth < 0){
            selectedMonth = 11;
            selectedYear -= 1;
        }
        selectedDay = (selectedMonth === currMonth && selectedYear === currYear) ? currDay : 0;
        loadMonth(selectedYear,  selectedMonth, selectedDay);
    })
    $('#nextMonth').click(() => {
        selectedMonth += 1;
        if (selectedMonth > 11) {
            selectedMonth = 0;
            selectedYear += 1;
        }
        selectedDay = (selectedMonth === currMonth && selectedYear === currYear) ? currDay : 0;
        loadMonth(selectedYear, selectedMonth, selectedDay);
    })
})