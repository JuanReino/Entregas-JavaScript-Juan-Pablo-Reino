if ( typeof window === 'object' ){


    //inicio del DOM cargado 
    window.addEventListener ('DOMContentLoaded', function(){

        let Dolar = document.getElementById('Dolar');
        let PesoArgentino = document.getElementById('Pesoargentino');
        let PesoColombiano = document.getElementById('Pesocolombiano');
        let PesoChileno = document.getElementById('Pesochileno');
        let formulario1 = document.querySelector("#formulario")

        // EVENTO 
        // EVENTO PARA SELECCIÓN DE DOLAR 

        const respuestaDolar = (event) => {
            formulario1.addEventListener('submit', function(event){
                let valor = document.querySelector('#valor').value
                document.write('¡Tu divisa es el Dolar!')
                document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
                document.write(valor)
                document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
                document.write(valor*50/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
                document.write(valor*30/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
                document.write(valor*20/100)
            })
            
            }
            
        Dolar.addEventListener('click', respuestaDolar)

        // EVENTO PARA SELECCIÓN DE PESO ARGENTINO 
        
        const respuestaPesoArgentino = (event) => {
            formulario1.addEventListener('submit', function(event){
                let valor = document.querySelector('#valor').value
                document.write('¡Tu divisa es el Peso Argentino!')
                document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
                document.write(valor)
                document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
                document.write(valor*50/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
                document.write(valor*30/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
                document.write(valor*20/100)
            })
            
            }
        PesoArgentino.addEventListener('click', respuestaPesoArgentino)

        // EVENTO PARA SELECCIÓN DE PESO COLOMBIANO 
        
        const respuestaPesoColombiano = (event) => {
            formulario1.addEventListener('submit', function(event){
                let valor = document.querySelector('#valor').value
                document.write('¡Tu divisa es el Peso Colombiano!')
                document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
                document.write(valor)
                document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
                document.write(valor*50/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
                document.write(valor*30/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
                document.write(valor*20/100)
            })
            
            }
        PesoColombiano.addEventListener('click', respuestaPesoColombiano)

        // EVENTO PARA SELECCIÓN DE PESO CHILENO 

        const respuestaPesoChileno = (event) => {
            formulario1.addEventListener('submit', function(event){
                let valor = document.querySelector('#valor').value
                document.write('¡Tu divisa es el Peso Chileno!')
                document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
                document.write(valor)
                document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
                document.write(valor*50/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
                document.write(valor*30/100)
                document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
                document.write(valor*20/100)
            })
            
            }
        PesoChileno.addEventListener('click', respuestaPesoChileno)
           
            })

    }
    

