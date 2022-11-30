//API VALOR DIVISAS CON RESPECTO AL DOLAR 
const apidata = document.getElementById ("apidata")
const monedasmundo = () =>{
let url = `https://api.currencyapi.com/v3/latest?apikey=GaITAmHRyToDGpHFjTADgjNPk281Y4fPlG6cdIVB`
fetch(url)
.then(res => res.json())

 
    .then (data =>{

        apidata.innerText = JSON.stringify(data);

    })
    .catch(error=>{
        alert(error)
    })
    
}
 
monedasmundo()