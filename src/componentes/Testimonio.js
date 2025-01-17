//nos permite utilizar todas las funcionalidades de React
import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//creamos un componente para controlar las palabras en negrita

//funcion que pone texto en negrita
function TextoTestimonio({ texto }) {

  //pone todo el texto en negrita a partir de 'freeCodeCamp'

/*  
  const partes = texto.split(/(freeCodeCamp)/);

  return (
    <p className='texto-testimonio'>
      {partes.map((parte, index) => {
        if (parte === 'freeCodeCamp' || index > partes.indexOf('freeCodeCamp')) {
          return <strong key={index}>{parte}</strong>;
        }
        return parte;
      })}
    </p>
  );
  */
  

  //pone en negrita solo la palabra 'freeCodeCamp'

  //he seleccionado este metodo porque me parece más eficiente y legible que el anterior, a parte destaca solo la palabra 'freeCodeCamp' ya que en el contexto que se usa es para dar
  //a conocer la plataforma y hacerle publicidad
  
  const partes = texto.split('freeCodeCamp');

  return (
    <p className='texto-testimonio'>
      {partes.map((parte, index) => (
        <React.Fragment key={index}>
          {index > 0 && <strong>freeCodeCamp</strong>}
          {parte}
        </React.Fragment>
      ))}
    </p>
  );
  


  /*
  const partes = texto.split(/(freeCodeCamp.*?)(\s|$)/gi);

  
  return (
    <p className='texto-testimonio'>
      {partes.map((parte, index) =>
        parte.match(/freeCodeCamp/gi) ? (
          <strong key={index}>{parte}</strong>
        ) : (
          parte
        )
      )}
    </p>
  );*/

}


//componente funcional
//con props para reutilizar y personalizar este componente
function Testimonio(props) {
  //devuelve jsx = js + html
  //contenedor principal que contiene una imagen y tres parrafos
  //con la comillas invertidas podemos añadir codigo js dentro de html, tal como se hace en la imagen
  //las comillas invertidas se llama literales y para añadir js hay que añadir $

  //la imagen se importa con require y se le pasa la ruta de la imagen
  //se le pasa un alt a la imagen, este alt se pasa como props, es decir, se le pasa un texto que se va a mostrar en caso de que la imagen no se pueda cargar en el archivo app.js
  
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={props.alternativo}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <TextoTestimonio texto={props.testimonio} />
      </div>
    </div>
  );
}

//es necesario exportar el componente
//la exportanción default nos permite indicar que va a ser el único componente que se va a exportar de este archivo
export default Testimonio;
//con la exportación nombrada si podemos exportar varios elementos de un mismo archivo