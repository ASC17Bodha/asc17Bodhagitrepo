function tablecreate(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const emailid=document.getElementById('emailid').value;
    const password=document.getElementById('password1').value;
    const address=document.getElementById('txtarea').value;
    const gender=document.querySelector("input[name='gender']:checked")? document.querySelector("input[name='gender']:checked").value:'';

    const table= document.getElementById('table1');
    const row=table.insertRow();

    const fname=row.insertCell(0);
    const fmail=row.insertCell(1);
    const fpass=row.insertCell(2);
    const faddr=row.insertCell(3);
    const fgen=row.insertCell(4);

    fname.textContent=name;
    fmail.textContent=emailid;
    fpass.textContent=password;
    faddr.textContent=address;
    fgen.textContent=gender;

    const formlocal = {
        name:name,
        emailid:emailid,
        password:password,
        address:address,
        gender:gender
    };

    let savedata=JSON.parse(localStorage.getItem('formlocal'))||[];
    savedata.push(formlocal);
    localStorage.setItem('formlocal',JSON.stringify(savedata));

    document.querySelector('form').reset();

}

window.onload=function(){
    let savedata=JSON.parse(localStorage.getItem('formlocal'))||[];
};

tablecreate();