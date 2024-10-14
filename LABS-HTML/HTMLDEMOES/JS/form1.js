function tablecreate(event){
    event.preventDefault();
    const name=document.getElementById('name');
    const emailid=document.getElementById('emailid');
    const password=document.getElementById('password1');

    const table= document.getElementById('tablename');
    const row=table.insertRow();

    const fname=row.insertCell(0);
    const fmail=row.insertCell(1);
    const fpass=row.insertCell(2);

    fname.textContent=name;
    fmail.textContent=emailid;
    fpass.textContent=password;
}
tablecreate();