let btnAction = document.getElementById ('btn-action');
btnAction.addEventListener("click", () => {
    let dayValue = parseInt(document.getElementById('day-value').value);
    if (dayValue == 2){
        alert('Monday');
    }
    else if (dayValue == 3){
        alert('Tuesday')}
    else if (dayValue == 4){
     alert('Wednesday')}
     else if (dayValue == 5){
        alert('Thursday')}
    else if (dayValue == 6){
         alert('Friday')}
     else if (dayValue == 7){
        alert('Saturday')}
        else if (dayValue == 8){
            alert('Sunday')}
       
    
});