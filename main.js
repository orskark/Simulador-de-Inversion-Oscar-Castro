function simulador() {
    const campoNombres = document.getElementById('nombres').value;
    const campoTelefono = document.getElementById('telefono').value;
    const campoEmail = document.getElementById('email').value;
    const campoMonto = document.getElementById('inversion').value;
    const campoTiempo = parseInt(document.getElementById('tiempo').value);
    const campoPre = document.getElementById('pre');
    const campoPost = document.getElementById('post');
    const showtiempo = document.getElementById('tiempo-show');
    const interesShow = document.getElementById('interes-show');
    const totalShow = document.getElementById('total-show');
    const gananciaShow = document.getElementById('ganancia-show');
    const nombresShow = document.getElementById('nombres-show');
    const emailShow = document.getElementById('email-show');

    campoPre.classList.add('disabled');
    campoPost.classList.remove('disabled');

    let interesMensual;
    switch (campoTiempo) {
        case 1:
            showtiempo.innerText = '12 meses';
            interesMensual = 1.6;
            break;
        case 2:
            showtiempo.innerText = '24 meses';
            interesMensual = 1.8;
            break;
        case 3:
            showtiempo.innerText = '36 meses';
            interesMensual = 2.0;
            break;

    }

    const ganancia = (campoMonto * (interesMensual / 100)) * (campoTiempo * 12);
    const total = parseFloat(campoMonto) + ganancia;
    
    interesShow.innerText = `${interesMensual}%`;
    totalShow.innerText = total.toFixed(2);
    gananciaShow.innerText = ganancia.toFixed(2);
    nombresShow.innerText = campoNombres;
    emailShow.innerText = campoEmail;
}


const button = document.getElementById('simulador-btn');
button.addEventListener('click', simulador);
