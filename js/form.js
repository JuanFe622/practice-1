let userName = document.getElementById("user-name").value;
console.log(userName);

let lastName = document.getElementById("last-name").value;
console.log(lastName);

let documentType = document.getElementById("document-type").value;
let selectDocument = documentType.options[documentType.selectedIndex].text;
console.log(selectDocument);

let documentNumber = document.getElementById("document-number").value;
console.log(documentNumber);

let gender = document.getElementsByName("gender");
for (var i = 0; i <  gender.length; i++) {
    if (gender[i].checked) {
      console.log(gender[i].value);
      break;
    }
  }
