// var autenticated = false;
localStorage.setItem('authenticated','false');
const login = document.querySelector('#login');

try {
    login.addEventListener('submit',(e)=>{
    e.preventDefault();

    const lemail = document.querySelector('#email').value
    const lpassword = document.querySelector('#password').value
    const User = JSON.parse(localStorage.getItem('users'))||[]
    const validUser = User.find(user => user.email === lemail && user.password === lpassword)

    if(!validUser){
        localStorage.setItem('authenticated','false');
        return alert('Usuario y/o contraseña incorrecta')
    }else{
        alert(`Welcome ${validUser.firstname}`)
        localStorage.setItem('login_success', JSON.stringify(validUser))
        localStorage.setItem('authenticated','true');
        window.location.href = 's02.Task.index.html'
        // cambiartext()
    }
        
})
} catch (error) {
  
}


// function cambiartext(){
//     var msje = document.getElementById('sesion01');
//     msje.textContent = 'mamita';
//     console.log(msje)
// }
