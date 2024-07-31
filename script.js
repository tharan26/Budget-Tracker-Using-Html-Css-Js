function add() {
    const typ = document.getElementById("type");
    const name = document.getElementById("name");
    const amt = document.getElementById("amnt");
    const data = document.getElementById("dt");

    const typValue = typ.value;
    const nameValue = name.value;
    const amtValue = amt.value;

    if (typValue === "") {
        alert("Please select a type");
        return;
    } else if (nameValue === "") {
        alert("Enter a name");
        return;
    } else if (amtValue === "") {
        alert("Enter an amount");
        return;
    }

    const trow = document.createElement("tr");
    const ttype = document.createElement("td");
    const tname = document.createElement("td");
    const tamt = document.createElement("td");
    const tdelete = document.createElement("td");

    const deleteBtn = document.createElement("a");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
        trow.remove();
    };

    ttype.textContent = typValue;
    tname.textContent = nameValue;
    tamt.textContent = amtValue;
    tdelete.appendChild(deleteBtn);
    trow.appendChild(ttype);
    trow.appendChild(tname);
    trow.appendChild(tamt);
    trow.appendChild(tdelete);
    data.appendChild(trow);

    typ.value = "";
    name.value = "";
    amt.value = "";

    return false;
}
