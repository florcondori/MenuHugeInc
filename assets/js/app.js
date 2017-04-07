window.addEventListener('load', function(){
	var arrayFotos = [	{name:"Fiorella Quispe", url:"1.png"},
						{name:"Lourdes Vilchez", url:"2.png"},
						{name:"Leydi Maldonado", url:"3.png"},
						{name:"Miriam Mendoza", url:"5.png"},
						{name:"Elizabeth Condori", url:"6.png"},
						{name:"Arantza Burga", url:"7.png"},
						{name:"Grecia Rayme", url:"8.png"},
						{name:"Janine Vega", url:"9.png"},
						{name:"Rosario Felix", url:"10.png"},
						{name:"Jenny Velasquez", url:"12.png"},
						{name:"Nadia Cuadros", url:"13.png"},
						{name:"Michell More", url:"14.png"},
						{name:"Marilu Llamoca", url:"15.png"},
						{name:"Mariel Garcia", url:"16.png"},
						{name:"Fiorella Cisneros", url:"17.png"},
						{name:"Geraldine Chauca", url:"18.png"},
						{name:"Yelitza Choque", url:"19.png"},
						{name:"Stephanie Hiyagon", url:"20.png"},
						{name:"Rocio Emma Tapia", url:"21.png"},
						{name:"Danna Franco", url:"22.png"},
						{name:"Flor Retamozo", url:"23.png"},
						{name:"Nathaly Pacheco", url:"24.png"},
						{name:"Erika Vidal", url:"25.png"},
						{name:"Katherine Ortega", url:"26.png"},
						{name:"Brilly Majuan", url:"27.png"},
						{name:"Flor de Cantuta Tello", url:"28.png"},
						{name:"Leslie Avendaño", url:"29.png"},
						{name:"Cindy Mendoza", url:"30.png"},
						{name:"Annia Flores", url:"31.png"},
						{name:"Betzi Loayza", url:"32.png"},
						{name:"Aida Sulca", url:"33.png"},
						{name:"Mimi Gutierrez", url:"34.png"},
						{name:"Nakarid Jave", url:"35.png"},
						{name:"Angie Condor", url:"36.png"},
						{name:"Maia Rojas", url:"37.png"},
						{name:"Ariana Cabana", url:"38.png"},
						{name:"Flor Condori", url:"39.png"},
						{name:"Mitchell Rodriguez", url:"40.png"},
						{name:"Naomi Villanueva", url:"41.png"},
						{name:"Mary Catillo", url:"42.png"},
						{name:"Miriam Peralta", url:"43.png"},
						{name:"Karin Alejo", url:"44.png"},
						{name:"Liliana Peña", url:"45.png"},
						{name:"Ruth Salvador", url:"46.png"},
						{name:"Wendy Reyes", url:"48.png"},
						{name:"Maria Grecia Cutipa", url:"50.png"},
						{name:"Ana Durand", url:"51.png"},
						{name:"Glisse Jorge", url:"52.png"},
						{name:"Neiza Nuñez", url:"53.png"},
						{name:"Sandra Solorzano", url:"54.png"}];

	var documentFragment = document.createDocumentFragment();
	arrayFotos.forEach(crearDivImagen);
	function crearDivImagen(elemento){
		var url = "assets/images/";
		var divContenedorImagen = document.createElement("div");
		divContenedorImagen.classList.add("contenedor-imagen");
		var img = document.createElement("img");
		img.setAttribute("src",url+elemento.url);
		img.setAttribute("alt",elemento.name);
		var divContenedorTexto = document.createElement("div");
		divContenedorTexto.classList.add("contenedor-texto");
		var span = document.createElement("span");
		span.innerText = elemento.name;
		
		divContenedorImagen.appendChild(img);
		divContenedorImagen.appendChild(divContenedorTexto);
		divContenedorImagen.appendChild(span);

		documentFragment.appendChild(divContenedorImagen);
	}
	document.getElementById("contenido").appendChild(documentFragment);
	
});