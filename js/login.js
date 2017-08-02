function entrar()
{
	if(document.getElementById("ctr").value =="contrasena" && document.getElementById("email").value == "usuario@ejemplo.com")
	{
		window.location.href="../pages/inicio.html"
	}
	else
	{
		alert("Su usuario y/o contraseña son incorrectos.");
	}
}

