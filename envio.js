function envioForm(){
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const fecha_nacimiento= document.getElementById("fecha_nacimiento").value;

    const formData={
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento: fecha_nacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    Headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify(formData)
})

.then(Response=>Response.json())
.then (data =>{
    console.log(data);
})
.catch(error=>{
    console.error("Error:",error);
});

}
