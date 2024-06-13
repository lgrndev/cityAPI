let url = 'https://api.zippopotam.us/fr/'

let body = document.querySelector("body")

let block = document.getElementById("block")




function afficherResultat(data) {
    let nouvelleDiv = document.createElement("div")
    nouvelleDiv.className = 'flex flex-col justify-center items-center text-center bg-red-50 p-10 gap-8 rounded-2xl shadow-2xl p-6'

    let titre = document.createElement("div")
    titre.className = 'text-2xl font-bold text-red-700'
    titre.textContent = "Choisis un ville"

    nouvelleDiv.appendChild(titre)





    for (let i = 0; i < data.places.length; i++) {
        let cityName = data.places[i]['place name']

        let nouveauSpan = document.createElement("span")
        nouveauSpan.textContent = cityName
        nouveauSpan.id = "nomville" 
        nouveauSpan.className = 'bg-red-500 p-2 rounded-xl text-white text-lg cursor-pointer hover:opacity-70 transition-all hover:opacity-70 active:opacity-100 hover:-translate-y-1 active:translate-y-1'


        nouveauSpan.addEventListener("click", function() {

            ////////////////////

            let nouvelleDiv2 = document.createElement("div")
            nouvelleDiv2.className = 'flex flex-col justify-center items-center text-center bg-red-50 p-10 gap-8 rounded-2xl shadow-2xl p-8'


            let region = document.createElement("span")
            region.className = 'bg-red-500 p-2 rounded-xl text-white text-lg hover:opacity-70 transition-all hover:opacity-70'
            let city = document.createElement("span")
            city.className = 'bg-red-500 p-2 rounded-xl text-white text-lg hover:opacity-70 transition-all hover:opacity-70'
            let lat = document.createElement("span")
            lat.className = 'bg-red-500 p-2 rounded-xl text-white text-lg hover:opacity-70 transition-all hover:opacity-70'
            let long = document.createElement("span")
            long.className = 'bg-red-500 p-2 rounded-xl text-white text-lg hover:opacity-70 transition-all hover:opacity-70'

            region.textContent = `Région : ${data.places[i].state}` 
            city.textContent = `Nom de la ville : ${cityName}` 
            lat.textContent = `Latitude : ${data.places[i].latitude}` 
            long.textContent = `Longitude : ${data.places[i].longitude}` 

            nouvelleDiv2.appendChild(city)
            nouvelleDiv2.appendChild(region)
            nouvelleDiv2.appendChild(lat)
            nouvelleDiv2.appendChild(long)


            let buttonReset = document.createElement("button")

            buttonReset.textContent = "Reinitialiser"
            buttonReset.className = 'border-red-600 border-2 p-2 rounded-full shadow cursor-pointer hover:opacity-70 transition-all hover:opacity-70 active:opacity-100 hover:-translate-y-1 active:translate-y-1'

            nouvelleDiv2.appendChild(buttonReset)

            buttonReset.addEventListener("click", () => {
                window.location.reload()
            })




            body.appendChild(nouvelleDiv2)


            


            ////////////////





            body.removeChild(nouvelleDiv)
        });




        nouvelleDiv.appendChild(nouveauSpan)


        

    }


    body.appendChild(nouvelleDiv)


    
}



let getville = async (code) => {
    let flux = await fetch(`https://api.zippopotam.us/fr/${code}`)
    let data = await flux.json()
    console.log(data)



    afficherResultat(data)
}




function ville() {

    let codePostal = document.getElementById("codepostal")
    let code = codePostal.value
    console.log(code)

    getville(code)

    body.removeChild(block)


}








let button = document.getElementById("button")


button.addEventListener("click", ville)


