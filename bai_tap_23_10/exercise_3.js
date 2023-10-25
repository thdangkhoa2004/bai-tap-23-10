let btnAction = document.getElementById ('btn-action');
btnAction.addEventListener("click", () => {
    let numberElem = parseInt(document.getElementById('number').value);

    if (numberElem >= 0){
        alert (`Giá trị tuyệt đối của ${numberElem} là ${numberElem}`);
    } 
    else {
        alert (`Giá trị tuyệt đối của ${numberElem} là ${-numberElem}`);
    }
});