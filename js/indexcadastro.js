var botaoAdicionar = document.querySelector("#btnCadastrar");

botaoAdicionar.addEventListener("click", function() {
	event.preventDefault();
	console.log("consegui");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.avanade.gama.academy/cities/sp");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();

    var erro = document.querySelector("#erroUsuario");
	erro.classList.remove("invisivel");

	var erro2 = document.querySelector("#erroEmail");
	erro2.classList.remove("invisivel");

	var erro3 = document.querySelector("#erroSenha");
	erro3.classList.remove("invisivel");

	var form = document.querySelector("#formLogin");

	form.reset();
});