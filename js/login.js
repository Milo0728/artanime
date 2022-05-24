const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const tab6 = document.getElementById('tab6');

signupBtn.onclick = function(){
    formBx.classList.add('active')
    tab6.classList.add('active')
}

signinBtn.onclick = function(){
    formBx.classList.remove('active')
    tab6.classList.remove('active')
}

// GUARDAR REGISTRO DEL USUARIO

const ingresoBoton = document.querySelector('.btn_ingresar')
const registroBoton = document.querySelector('.btn_registrar');



registroBoton.onclick = function store(){

    
    let name = document.getElementById('name').value,
        mail = document.getElementById('mail').value,
        pw   = document.getElementById('pw').value,
        pwConfirm = document.getElementById('pwConfirm').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.name.toLowerCase() == name.toLowerCase() &&
            data.pwConfirm.toLowerCase() == pwConfirm.toLowerCase()
        );


    if(name.length == 0){

        alert('Por favor llenar en la casilla del nombre');
        
    } else if(mail.length == 0){

        alert('Por favor llenar en la casilla del email')

    }else if(pw.length == 0){

        alert('Por favor llenar en la casilla de contraseña');

    }else if(pwConfirm.length == 0){

        alert('Por favor llenar en la casilla de confirmar contraseña');

    } else if(pwConfirm.value != pw.value){

        alert('Las contraseñas digitadas son diferentes')

    }else if(name.length == 0 && pw.length == 0 && mail.length == 0 && pwConfirm.length == 0 ){
        
        alert('Por favor llenar en ambas casillas');

    }else{
        
        if (!exist){

            formData.push({ name, mail, pwConfirm});
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('name').focus();
            alert('Su cuenta ha sido creada exitosamente');
            location.href="#tab6";
        } else{
            alert("Error al crear la cuenta")
        }
    }
}

// function getList(){
//     var listaGuardada = localStorage.getItem('localListaUsuario');
//     if(listaGuardada == null){
//         listaUsuarios = []
//     } else{
//         listaUsuarios = JSON.parse(listaGuardada);
//     }

//     return listaGuardada;
// }



// CHECKEAR QUE AL LOGUEARSE, LA CUENTA SI EXISTA  

ingresoBoton.onclick = function check(){

    let mail = document.getElementById('userName').value;
    let pwConfirm = document.getElementById('userPw').value;


    let formData = JSON.parse( localStorage.getItem('formData') );
    
    let exist = false;

    
    for( let i = 0; i < formData.length; i++ ){

        if( formData[i].name == mail ){
            
            if( formData[i].pwConfirm == pwConfirm ){
                
                exist = true;
            }
        }
    }

    if ( !exist){
        alert("Datos incorrectos o no éxiste");
    } else{
        alert("Usuario logueado correctamente");
        window.location.href = "#tab7";
    }

    
}
