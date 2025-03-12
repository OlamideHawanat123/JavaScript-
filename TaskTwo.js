const theCar = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
}


function car(name){
    for (let [key, value] of Object.entries(name)) {
    console.log(key + "  : " +  value);
    }

}


car(theCar)

