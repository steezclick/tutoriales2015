/*declaro variables y las indico con las id's o classes de nuetro html5*/
var $form= $("#formulario"),
	$titulo= $("#titulo"),
	$url= $("#url"),
	$button= $("#mostrar-form"),
	$list= $("#contenido"),
	$post= $('.item').first();

//funcion
function mostrarFormulario(){
	/*como nuestro formulario esta oculto con esta animacion 
	hacemos que nuestro formulario se oculte y se muestre al dar click*/
	$form.slideToggle();
	//para validar
	return false; //no se realmente para que es esto 
}

function agregarPost(){
	var ulr= $url.val(),
		titulo= $titulo.val(),
		$clone= $post.clone();

	//con "find" buscamos la clase titulo_item, con "text" le metemos el link y por ultimo attr remplazamos el href del enlace por la url agregada
	$clone.find(".titulo_item a").text(titulo).attr("href",url);
	//esconemos el clone
	$clone.hide();
	//podemos usar append pero con esto nos sale al ultimo de toda la lista
	//mientras que con prepend nos sale primero
	$list.prepend($clone);
	//muestra el clone anterior mente ocultado
	$clone.fadeIn();
	return false;
}

//eventos
$button.click(mostrarFormulario);
$form.on("submit",agregarPost);