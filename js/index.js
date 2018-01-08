var botaoAdicionar = document.querySelector("#btnEntrar");

botaoAdicionar.addEventListener("click", function() {
	event.preventDefault();
	console.log("consegui");

	var erro = document.querySelector("#erroUsuario");
	erro.classList.remove("invisivel");

	var erro2 = document.querySelector("#erroSenha");
	erro2.classList.remove("invisivel");

	var form = document.querySelector("#formLogin");

	form.reset();
    
});