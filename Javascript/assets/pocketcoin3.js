if ( typeof window === 'object' ){

    //inicio del DOM cargado 
    window.addEventListener ('DOMContentLoaded', function(){

        let Dolar = document.getElementById('Dolar');
        let PesoArgentino = document.getElementById('Pesoargentino');
        let formulario1 = document.querySelector("#formulario")

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


    }
    )
}
