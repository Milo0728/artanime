class ProductoFuego{
    constructor (nombre, imagen, descripcion, material, precio, disponible){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.material = material;
        this.precio = precio;
        this.disponible = disponible;
    }
}

class UI_fuego {


    addProducto(){

        let arrayLocalFuego = JSON.parse( localStorage.getItem("figurasFuego"));
        console.log( arrayLocalFuego )
        if( arrayLocalFuego != undefined ){

            for( let i = 0; i < arrayLocalFuego.length; i++ ){
                const listaProducto = document.querySelector('.contenido-producto-fuego')

                    const element = document.createElement('div');

                element.innerHTML = `
                    <div class="cuerpo-producto-fuego">
                        <div class="descripcion-fuego">
                            <img id="imagenProducto-fuego" src="${ arrayLocalFuego[i].imagen }"> <br>
                            <strong>Nombre: </strong><span id="nombre">${ arrayLocalFuego[i].nombre }</span> <br>
                            <strong>Descripción: </strong><span>${ arrayLocalFuego[i].descripcion }</span> <br>
                            <strong>Material: </strong><span>${ arrayLocalFuego[i].material }</span> <br>
                            <strong>Precio: </strong><span id="precio">$${ arrayLocalFuego[i].precio }</span> <br>
                            <strong>Disponible: </strong><span id="disponible">${ arrayLocalFuego[i].disponible }</span>
                            <br>
                            <button onclick="funcionBotonFuego(${ i })" class="boton-agregar-fuego">Agregar</button>
                        </div>
                    </div>
                `;

                listaProducto.appendChild(element);
            }        
        }
        
    }

    resetForm(){
        document.getElementById('product-form-fuego').reset();
    }

    mostrarMensaje(mensaje){
        const div = document.createElement('div');
        div.className = `alert`;
        div.appendChild(document.createTextNode(mensaje));

        // MOSTRAR
        const container = document.querySelector('.container');
        const app = document.querySelector('#App3')

        // container.insertBefore(div, app);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

// EVENTOS DEL ADMIN

document.getElementById('product-form-fuego')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('nameNewProductFuego').value;
        const img = document.getElementById('imgNewProductFuego').value;
        const description = document.getElementById('desNewProductFuego').value;
        const material = document.getElementById('matNewProductFuego').value;
        const precio = document.getElementById('priceNewProductFuego').value;
        const disponible = document.getElementById('disNewProductFuego').value;

        const productoFuego = new ProductoFuego(name, img, description, material, precio, disponible)
        
     

        const uifuego = new UI_fuego();

        if(name === "" || img === "" || description === "" || material === "" || precio === "" || disponible === ""){
            return uifuego.mostrarMensaje('Complete Los Campos Por Favor', 'danger')
        }

        validarSiHayLocalFuego( productoFuego );

        uifuego.resetForm();
        //ui.mostrarMensaje('Producto Agregado')

        location.reload();
        e.preventDefault()
    
    });


    let validarSiHayLocalFuego = ( productos ) =>{
        console.log("p")


        if( JSON.parse( localStorage.getItem("figurasFuego") ) == undefined ){
            localArrFuego =  [ productos ];
            localStorage.setItem("figurasFuego", JSON.stringify( localArrFuego ));
       }
       else{
           localArrFuego = JSON.parse( localStorage.getItem("figurasFuego") );
           
           localArr.push( productos );
           localStorage.setItem("figurasFuego", JSON.stringify( localArrFuego ));
       }
   }

let ui2fuego = new UI_fuego();
window.addEventListener('DOMContentLoaded', ui2fuego.addProducto() );