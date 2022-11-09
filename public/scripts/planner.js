$(function(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const planner = JSON.parse(plans)

    const addPlans = function(day){
        const blocks = $("#" + day + " td");
        for(let event of planner[day]){
            const start = parseInt(event.start) * 2  - 9;
            const end = parseInt(event.end) * 2 - 9;
            for(let i = start; i < end; i+=2){
                blocks[i].bgColor = "green";
            }
        }
    };
    for(let day in planner){
        addPlans(day);
    }
})