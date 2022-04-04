
// APP es el componente principal de la aplicacion completa ya que en el main es el que se esta cargando y renderizando

/* 
  ¿ Que es JSX ?

  Son las iniciales de javascript syntax extension.

  Es una extension del lenguaje desarrollada por meta. 

  Es un lenguaje de template que muestra el HTML pero tiene todas las funciones de javascript 

  Una vez compilado los archivos jsx pasan a ser funciones JS normales.

  Las etiquetas de solo apertura como <link> <img> o <input> deberan finalizar con    /> 

  Cada componente debe tener un return con maximo un elemento en el nivel mas alto. Puede ser un div contenedor de los demas elementos o utilizamos un FRAGMENT <>

  Los componentes tienen 2 partes:

  1) Lo que esta antes del return, donde puedo colocar funciones de JS, condicionales. 

  2) Lo que esta dentro del return que seria lo que se muestra en pantalla, no se puede escribir JS a menos de que se utilizen expresiones como un ternario dentro de unas llaves para indicarle que es codigo JS.

  { edad > 18 ? 'Eres mayor de edad' : 'No eres mayor de edad' }

  Para debuguear desde el navegador podemos instalar la extension de chrome llamada REACT DEVELOPER TOOLS


  Que son los HOOKS?
  Los hooks permiten modificar el state y se dividen en:

  basicos:

  useState , useEffect, useContext

  adicionales:

  useReducer
  useCallback
  useMemo
  useRef
  useImperativeHandle
  useLayoutEffect
  useDebugValue


  Tambien puedo crear mis propios hooks de esta manera separar el codigo en funciones reutilizizables y sacar todo el beneficio de react


  -----------------  PROPS -----------------

  Podemos pasar informacion entre componentes a traves de los PROPS.
  El state o funcioens que se crean en un componente solo estaran disponibles en ese componente a menos que los pases por PROPS.

  Los props se pasan del padre al hijo , nunca se pueden pasar al reves.

  Si tenemos un state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal.

  Cada nivel de componentes debera tomar y pasar el PROP hacia otros componentes, tecnologias como REDUX o CONTEXT evitan tener que hacerlo de esta forma.

  Si quisiera pasar un prop del hijo al padre puedo crear una funcion en el componente padre que tome 1 valor y lo imprima, luego pasar la funcion hacia el hijo y ahi pasarle el valor con la funcion.

*/


import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoLocales from "./components/ListadoLocales";


function App() {

  //Lugar para escribir funciones JS, validaciones, procesar datos...

  const [showcase, setShowcase] = useState([]) // Todos los eventos
  const [evento, setEvento] = useState({}) // Solo 1 evento

  useEffect(() => {
    const obtenerLS = () => {
      const eventosLS = JSON.parse(localStorage.getItem('eventos')) ?? [];

      setShowcase(eventosLS)
    }

    obtenerLS();

  }, [])

  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(showcase))
  }, [showcase])


  const eliminarEvento = id => {
    const eventosActualizados = showcase.filter( evento => evento.id !== id)

    setShowcase(eventosActualizados)
  }

  

  return (
    <div className="container mx-auto mt-20"> 
      <Header />

      <div className="mt-12 md:flex">

        <Formulario 
         
          showcase={showcase}
          setShowcase={setShowcase}
          evento={evento}
          setEvento={setEvento}
        />
        <ListadoLocales 
          showcase={showcase}
          setEvento={setEvento}
          eliminarEvento={eliminarEvento}

        />
       

      </div>

      
      
    </div>
  )
}

export default App
