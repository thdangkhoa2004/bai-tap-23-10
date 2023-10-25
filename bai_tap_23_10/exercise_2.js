let btnAction = document.getElementById ('btn-action');
btnAction.addEventListener("click", () => {
    let aElem = parseFloat(document.getElementById('a-Elem').value);
    let bElem = parseFloat(document.getElementById('b-Elem').value);

    if (aElem > bElem){
        alert (`${aElem} là số lớn nhất`);
    } 
    else {
        alert (`${bElem} là số lớn nhất`);
    }
    
});