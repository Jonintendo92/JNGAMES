document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-registro');
    const campos = form.elements;
    let formularioValido = true;

    const paisSelect = document.getElementById('pais');
    const condicionesCheckbox = document.getElementById("condiciones");
    let condicionesErrorSpan = null;


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formularioValido = true;
        
        for (let i = 0; i < campos.length; i++){
            if (campos[i].value === ''){
                const errorSpan = campos[i].nextElementSibling;

                if(errorSpan && errorSpan.tagName.toLowerCase() === 'span'){
                    errorSpan.textContent = '*Este campo es obligatorio';
                    formularioValido = false;
                } 
            }
        }
       var condicionesCheckbox = document.getElementById('condiciones');
            if(!condicionesCheckbox.checked){
               var condicionesErrorSpan = document.getElementById('condicionesError');
               condicionesErrorSpan.textContent = '* Debes aceptar los términos y condiciones';
                condicionesErrorSpan.style.color = 'red';
                formularioValido = false;
              } 
           
              const paisSelect = document.getElementById('pais');
              paisSelect.addEventListener('change', function(){
                if(paisSelect.value === ''){
                    document.getElementById('paisError').textContent = '*Selecciona un país';
                    document.getElementById('paisError').style.color = 'red';
                    formularioValido = false;
                } else {
                   document.getElementById('paisError').textContent = '';
                }
            });
        if(formularioValido){
            const cartel = document.createElement('div');
            cartel.textContent = 'Te registraste con éxito';
            cartel.style.position = 'absolute';
            cartel.style.top = '50%';
            cartel.style.left = '50%';
            cartel.style.transform = 'translate(-50%, -50%)';
            cartel.style.background = 'green';
            cartel.style.color = 'white';
            cartel.style.padding = '10px';
            cartel.style.borderRadius = '10px';
            document.body.appendChild(cartel);

            setTimeout(() => {
                cartel.remove();
                window.location.href = '../index.html';
            }, 1000);
        }
    });
});
