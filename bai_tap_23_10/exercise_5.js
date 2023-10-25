let btnAction = document.getElementById ('btn-action');
btnAction.addEventListener("click", () => {
    let n1Elem = parseFloat(document.getElementById('n1-num').value);
    let n2Elem = parseFloat(document.getElementById('n2-num').value);
    let n3Elem = parseFloat(document.getElementById('n3-num').value);

    if (n1Elem >= n2Elem & n1Elem >= n3Elem){
        alert (`${n1Elem} là số lớn nhất`);
    }
    else if (n2Elem >= n1Elem & n2Elem >= n3Elem){
        alert (`${n2Elem} là số lớn nhất`);
    }
    else if (n3Elem >= n2Elem & n3Elem >= n1Elem){
        alert (`${n3Elem} là số lớn nhất`);
    }
    
});