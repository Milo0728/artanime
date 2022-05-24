class ProductoViento{
    constructor (nombre, imagen, descripcion, material, precio, disponible){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.material = material;
        this.precio = precio;
        this.disponible = disponible;
    }
}

class UI_viento {


    addProducto(){

        let arrayLocalViento = JSON.parse( localStorage.getItem("figurasViento"));
        console.log( arrayLocalViento )
        if( arrayLocalViento != undefined ){

            for( let i = 0; i < arrayLocalViento.length; i++ ){
                const listaProducto = document.querySelector('.contenido-producto-viento')

                    const element = document.createElement('div');

                element.innerHTML = `
                    <div class="cuerpo-producto-viento">
                        <div class="descripcion-viento">
                            <img id="imagenProducto-viento" src="${ arrayLocalViento[i].imagen }"> <br>
                            <strong>Nombre: </strong><span id="nombre">${ arrayLocalViento[i].nombre }</span> <br>
                            <strong>Descripción: </strong><span>${ arrayLocalViento[i].descripcion }</span> <br>
                            <strong>Material: </strong><span>${ arrayLocalViento[i].material }</span> <br>
                            <strong>Precio: </strong><span id="precio">$${ arrayLocalViento[i].precio }</span> <br>
                            <strong>Disponible: </strong><span id="disponible">${ arrayLocalViento[i].disponible }</span>
                            <br>
                            <button onclick="funcionBotonViento(${ i })" class="boton-agregar-viento">Agregar</button>
                        </div>
                    </div>
                `;

                listaProducto.appendChild(element);
            }        
        }
        
    }

    resetForm(){
        document.getElementById('product-form-viento').reset();
    }

    mostrarMensaje(mensaje){
        const div = document.createElement('div');
        div.className = `alert`;
        div.appendChild(document.createTextNode(mensaje));

        // MOSTRAR
        const container = document.querySelector('.container');
        const app = document.querySelector('#App2')

        // container.insertBefore(div, app);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

// EVENTOS DEL ADMIN

document.getElementById('product-form-viento')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('nameNewProductViento').value;
        const img = document.getElementById('imgNewProductViento').value;
        const description = document.getElementById('desNewProductViento').value;
        const material = document.getElementById('matNewProductViento').value;
        const precio = document.getElementById('priceNewProductViento').value;
        const disponible = document.getElementById('disNewProductViento').value;

        const productoViento = new ProductoViento(name, img, description, material, precio, disponible)
        
     

        const uiviento = new UI_viento();

        if(name === "" || img === "" || description === "" || material === "" || precio === "" || disponible === ""){
            return uiviento.mostrarMensaje('Complete Los Campos Por Favor', 'danger')
        }

        validarSiHayLocalViento( productoViento );

        uiviento.resetForm();
        //ui.mostrarMensaje('Producto Agregado')

        location.reload();
        e.preventDefault()
    
    });


    let validarSiHayLocalViento = ( productos ) =>{
        console.log("p")


        if( JSON.parse( localStorage.getItem("figurasViento") ) == undefined ){
            localArrViento =  [ productos ];
            localStorage.setItem("figurasViento", JSON.stringify( localArrViento ));
       }
       else{
           localArrViento = JSON.parse( localStorage.getItem("figurasViento") );
           
           localArr.push( productos );
           localStorage.setItem("figurasViento", JSON.stringify( localArrViento ));
       }
   }

let ui2viento = new UI_viento();
window.addEventListener('DOMContentLoaded', ui2viento.addProducto() );