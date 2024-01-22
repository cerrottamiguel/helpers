function addElement () { 
    // crea un nuevo div 
    // y añade contenido 
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode(formResult(formulario)); 
    newDiv.appendChild(newContent); //añade texto al div creado. 
  
    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
}

function formResult (form){
    var nombre = (form.nombre.value).toUppercase();
    var tema = form.issue.value;

    return nombre + " " + tema
}