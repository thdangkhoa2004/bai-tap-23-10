let btnAction = document.getElementById('btn-action');
btnAction.addEventListener("click", () => {
    let lengthValue = parseFloat(document.getElementById('length-value').value);
    let widthValue = parseFloat(document.getElementById('width-value').value);
    if (lengthValue == widthValue){
        alert ('Đây là hình vuông');
    }
    else {
        alert ('Đây không phải là hình vuông');
    };

});
