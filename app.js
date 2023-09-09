// test to see if the browser supports the HTML template element by checking
// for the presence of the template's element content attribute.
if ("content" in document.createElement("template")) {   // instantiate the table with the existing HTML tbody
    // and the row with the template
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#transactionrow");
    // clone the new row and insert it to the table
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = "T0009092023001";
    td[1].textContent = "20230909";
    tbody.appendChild(clone);

}
else {}