document.getElementById('btn_submit')?.addEventListener('click', function(){
  const emailField = document.getElementById('user_email');
  const email = emailField.value;

  const passwordField = document.getElementById('user_password');
  const password = passwordField.value;

  if(email === "sontan@baap.com" && password === 'secret'){
    window.location.href = 'bank.html'
   }
   else{
      alert('tui password vhule gesos!!! toke ami tejjo sontan ghosona korlam')
    }
})