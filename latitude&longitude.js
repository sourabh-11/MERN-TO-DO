let finlaction =()=>{
    const status = document.querySelector('.status');
    

    const sucees =(position)=>{
        console.log(position);
        const lattaitue = position.coords.latitude
        const longitude = position.coords.longitude
       document.getElementById("clickes").innerHTML =  ` the longitude is ${longitude} and lattaitude is ${lattaitue}`
    }
    const error =()=>{
    console.log("error");
    }
    


     navigator.geolocation.getCurrentPosition(sucees,error)
}
document.querySelector('#clickes').addEventListener('click',finlaction)