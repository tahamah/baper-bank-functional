document.getElementById('login-btn').addEventListener('click',function(){
    //User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //User Passowerd
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    //check email and password
    if(userEmail == 'taha.iu.bd@gmail.com' && userPass==100215){
        window.location.href='banking.html'
    }
    else{
        console.log('Wrong Passord')
        
    }
})