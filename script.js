document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    alert('Gracias ' + name + ', tu consulta ha sido enviada.');
});
