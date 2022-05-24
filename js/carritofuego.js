let añadirElementosFuego = () => {

    const carritoPadre = document.getElementById("cart");

    let objetosArreglo = JSON.parse( localStorage.getItem('productosCarritoFuego') );

    for( let i = 0; i < objetosArreglo.length; i++){

        let tablePadre = document.createElement('table');
        carritoPadre.appendChild( tablePadre );

        let tBody = document.createElement('tbody');
        tablePadre.appendChild( tBody );

        let tr = document.createElement('tr');
        tBody.appendChild( tr );

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        tr.appendChild( td1 );
        tr.appendChild( td2 );
        tr.appendChild( td3 );
        tr.appendChild( td4 );
        tr.appendChild( td5 );

        let boton = document.createElement('button');
        td1.appendChild( boton );

        let i1 = document.createElement('i');
        boton.appendChild( i1 );

        let imagen = document.createElement('img');
        td2.appendChild( imagen );
        imagen.src = objetosArreglo[i].imagen;
        imagen.style.width = "60px";
        


        let h51 = document.createElement('h5');
        td3.appendChild( h51 );
        h51.innerText = objetosArreglo[i].nombre;

        let h52 = document.createElement('h5');
        td4.appendChild( h52 );
        h52.innerText = objetosArreglo[i].precio;

        let input1 = document.createElement('input');
        td5.appendChild( input1 );



        input1.type = "number";
        input1.min  = 1;
        boton.style.border = "none";
        boton.style.cursor = "pointer";
        i1.className = "far fa-times-circle";

        
    }

};




    // document.getElementById("total-valor").innerHTML = " " + product[0].precio;
    // const subtotalValor = document.getElementById("total-valor")


class FiguraFuego {
    constructor (nombre, imagen, precio, disponible){
            this.nombre = nombre;
            this.imagen = imagen;
            this.precio = precio;
            this.disponible = disponible;
    }
}

function funcionBotonFuego( index ) {

    // const name = document.getElementById('nombre').value
    // const link = document.getElementById('imagenProducto-agua').value;
    // const precio = document.getElementById('precio').value;
    // const dispo = document.getElementById('disponible').value;

    let figuras = JSON.parse( localStorage.getItem("figurasFuego"));
    console.log( index );
        console.log( figuras[ parseInt( index )] );
        validarSiExisteFiguraFuego( figuras[ parseInt(index )]);
        añadirElementosFuego( figuras[ parseInt( index )] );  


    // index.preventDefault()
}

function validarSiExisteFiguraFuego ( figuras ){
    if( JSON.parse( localStorage.getItem("productosCarritoFuego") ) == undefined ){
        localArr =  [ figuras ];
        localStorage.setItem("productosCarritoFuego", JSON.stringify( localArr ));
   }
   else{
       localArr = JSON.parse( localStorage.getItem("productosCarritoFuego") );
       
       localArr.push( figuras );
       localStorage.setItem("productosCarritoFuego", JSON.stringify( localArr ));
   }

}

function funcionCheckout() {
    window.location.href = "https://www.paypal.com/co/webapps/mpp/what-is-paypal?kid=p66048537483&gclid=CjwKCAjw4ayUBhA4EiwATWyBriM-aQHjFL7lu5sCCvKf_3tGxGPX37fhw0oZAzDkCbvM0c2XA8yMexoCDX0QAvD_BwE&gclsrc=aw.ds";
    console.log(subTotal)
}