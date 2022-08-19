let userName = document.getElementsByName("user-name");

let lastName = document.getElementsByName("last-name");

let documentType = document.getElementsByName("document-type");

let documentNumber = document.getElementsByName("document-number");

let gender = document.getElementsByName("gender");

function imprimir(){
    console.log(userName[0].value);
    console.log(lastName[0].value);
    console.log(documentType[0].value);
    console.log(documentNumber[0].value);

    for (var i = 0; i <  gender.length; i++) {
        if (gender[i].checked) {
          console.log(gender[i].value);
          break;
        }
      }
}