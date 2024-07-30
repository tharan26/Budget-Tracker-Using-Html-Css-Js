function add(){
    const typ=document.getElementById("type").value;
    const name=document.getElementById("name").value;
    const amt=document.getElementById("amnt").value;
    const data=document.getElementById("dt");

    if(typ===""){
        alert("Please select a type");
        return;
    }
    else if(name==="")
    {
        alert("Enter a name");
        return;
    }
    else if(amt===""){
        alert("Enter an amount");
        return;
    }

    const trow=document.createElement("tr");
    const ttype=document.createElement("td");
    const tname=document.createElement("td");
    const tamt=document.createElement("td");
    const tdelete=document.createElement("td");

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";

    deleteBtn.onclick=function() {
        trow.remove();
    };
    ttype.textContent = typ;
    tname.textContent = name;
    tamt.textContent = amt;
    tdelete.appendChild(deleteBtn);
    trow.appendChild(ttype);
    trow.appendChild(tname);
    trow.appendChild(tamt);
    trow.appendChild(tdelete);
    data.appendChild(trow);

    return false;
    
}