document.getElementById("footer_id").innerHTML = `<div id="footer_id">
<p>
    Todos los derechos reservados
</p>
</div>`;

document.getElementById("header_id").innerHTML= `
<nav class="animate__animated animate__backInLeft">
<button>
    <a href="../pages/index.html">
        Home
    </a>
</button>
<button>
    <a href="../pages/about_us.html">
        Acerca de
    </a>
</button>
<button>
    <a href="../pages/contact.html">
        Contacto
    </a>
</button>
</nav>
`


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact_form").addEventListener('submit', validateForm); 
  });

function validateForm(event){
    event.preventDefault();
    let userObject= document.getElementById('email');
    let user = userObject.value;
    if (user.length===0){
        alert('Debe ingresar un correo electrónico');
        return;
    }
    let objComments = document.getElementById('comments');
    let comments = objComments.value;
    if (comments.length===0){
        alert('Debe ingresar un comentario');
        return;
    }
    
    this.submit();
}