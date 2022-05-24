class Producto {
    constructor (nombre, imagen, descripcion, material, precio, disponible){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.material = material;
        this.precio = precio;
        this.disponible = disponible;
    }
}

class UI {


    addProducto(){

        let arrayLocal = JSON.parse( localStorage.getItem("figuras"));
        console.log( arrayLocal )
        if( arrayLocal != undefined ){

            for( let i = 0; i < arrayLocal.length; i++ ){
                const listaProducto = document.querySelector('.contenido-producto-agua')

                    const element = document.createElement('div');

                element.innerHTML = `
                    <div class="cuerpo-producto">
                        <div class="descripcion">
                            <img id="imagenProducto-agua" src="${ arrayLocal[i].imagen }"> <br>
                            <strong>Nombre: </strong><span id="nombre">${ arrayLocal[i].nombre }</span> <br>
                            <strong>Descripción: </strong><span>${ arrayLocal[i].descripcion }</span> <br>
                            <strong>Material: </strong><span>${ arrayLocal[i].material }</span> <br>
                            <strong>Precio: </strong><span id="precio">$${ arrayLocal[i].precio }</span> <br>
                            <strong>Disponible: </strong><span id="disponible">${ arrayLocal[i].disponible }</span>
                            <br>
                            <button onclick="funcionBoton(${ i })" class="boton-agregar">Agregar</button>
                        </div>
                    </div>
                `;

                listaProducto.appendChild(element);
            }        
        }
        
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    // mostrarMensaje(mensaje){
    //     const div = document.createElement('div');
    //     div.className = `alert`;
    //     div.appendChild(document.createTextNode(mensaje));

    //     // MOSTRAR
    //     const container = document.querySelector('.container');
    //     const app = document.querySelector('#App')

    //     // container.insertBefore(div, app);

    //     setTimeout(function () {
    //         document.querySelector('.alert').remove();
    //     }, 3000)
    // }

}

// EVENTOS DEL ADMIN

document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('nameNewProduct').value;
        const img = document.getElementById('imgNewProduct').value;
        const description = document.getElementById('desNewProduct').value;
        const material = document.getElementById('matNewProduct').value;
        const precio = document.getElementById('priceNewProduct').value;
        const disponible = document.getElementById('disNewProduct').value;

        const producto = new Producto(name, img, description, material, precio, disponible)
        
     

        const ui = new UI();

        if(name === "" || img === "" || description === "" || material === "" || precio === "" || disponible === ""){
            return ui.mostrarMensaje('Complete Los Campos Por Favor', 'danger')
        }

        validarSiHayLocal( producto );

        ui.resetForm();
        //ui.mostrarMensaje('Producto Agregado')

        location.reload();
        e.preventDefault()
    
    });


    let validarSiHayLocal = ( productos ) =>{
        console.log("p")


        if( JSON.parse( localStorage.getItem("figuras") ) == undefined ){
            localArr =  [ productos ];
            localStorage.setItem("figuras", JSON.stringify( localArr ));
       }
       else{
           localArr = JSON.parse( localStorage.getItem("figuras") );
           
           localArr.push( productos );
           localStorage.setItem("figuras", JSON.stringify( localArr ));
       }
   }

let ui2 = new UI();
window.addEventListener('DOMContentLoaded', ui2.addProducto() );