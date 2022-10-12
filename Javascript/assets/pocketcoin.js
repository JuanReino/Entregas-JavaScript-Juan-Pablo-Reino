

alert("Bienvenido a mi POCKETCOIN, esta aplicación web te ayudará a desarrollar un plan de ahorro dependiendo tu moneda local o divisa")

alert(" El sistema de ahorro que se presenta es el llamado: 50-30-20   50% gastos fijos    20% ahorro     30% gastos prescindibles")

alert("Para PESO ARGENTINO ingrese '1'  Para PESO CHILENO ingrese '2'  Para DOLAR ingrese '3'  Para PESO COLOMBIANO ingrese '4'")

let tipo_moneda = parseInt (prompt("Ingrese su moneda Local o divisa"))

let salario = parseInt ( prompt('Ingrese sus Ingresos Mensuales'))

function Ahorrador (nombre,salario) {
        this.nombre = nombre
        this.salario = salario
    }
let ahorrador1 = new Ahorrador(prompt('Ingresa tu Nombre'), salario)
console.log('salida de ahorrador1',ahorrador1)

       ;

    console.log("salario --->", salario)


        switch (tipo_moneda){
         case 1:
            alert(' Haz elegido PESO ARGENTINO');
            document.write('¡Tu divisa es Peso Argentino!')
            document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
            document.write(salario)
            document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
            document.write(salario*50/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
            document.write(salario*30/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
            document.write(salario*20/100)
            break;
        case 2:
            alert(' Haz elegido PESO CHILENO')
            document.write('¡Tu divisa es Peso Chileno!')
            document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
            document.write(salario)
            document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
            document.write(salario*50/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
            document.write(salario*30/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
            document.write(salario*20/100)
            break;
        case 3:
            alert(' Haz elegido DOLAR');
            document.write('¡Tu divisa es el Dolar!')
            document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
            document.write(salario)
            document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
            document.write(salario*50/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
            document.write(salario*30/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
            document.write(salario*20/100)
            break;
        case 4:
            alert(' Haz elegido PESO COLOMBIANO')
            document.write('¡Tu divisa es Peso Colombiano!')
            document.write(`<div class="alert alert-danger container" role="alert">¡Tus Ingresos Mensuales son!:</div>`)
            document.write(salario)
            document.write(`<div class="alert alert-danger container" role="alert">El 50% de tus ingresos para gastos fijos son:</div>`)
            document.write(salario*50/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 30% de tus ingresos para gastos prescindibles son:</div>`)
            document.write(salario*30/100)
            document.write(`<div class="alert alert-danger container" role="alert">El 20% de tus ingresos para ahorro es de:</div>`)
            document.write(salario*20/100)
            break;
        default:
            alert('Valor erroneo')
            
        };

        
        


    
    
