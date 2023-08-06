function formvaldation(){
    const username=document.getElementById("name").value;
    const password=document.getElementById("pass").value;
    const email=document.getElementById("email").value;
    let Error=document.getElementById("error");
    let text="";
    if(username.length < 4){
        text="please Enter valid user name";
        Error.innerHTML=text;
        return false;
    }
    else if(password.length < 8 || password.search(/[A-Z]/)==-1){
        text="please Enter valid password";
        Error.innerHTML=text;
        return false;
    }
    else if(email.indexOf("@") ==-1 || email < 14){
        text="please Enter valid email";
        Error.innerHTML=text; 
        return false;
    }
    else{
        text="Thank You**";
        Error.innerHTML=text;
        alert("It's Done");
        return true;
    }
}
