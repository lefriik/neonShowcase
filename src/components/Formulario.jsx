/* 
    Componente 2 - Formulario

    Para crear un componente con un snipet podemos utilizar el comando RAFCE mediante la extension ES7 REACT SNIPETS.

    ¿ Que es el STATE ?

    La pieza central de REACT , cual es el estado de la app, si tengo un carrito, que elementos tiene. Es una variable con informacion relevante en la app.

    El state es creado con useState.

    Para usarlo primero importamos:

    import {useState} from react

    luego

    const [cliente, setCliente] = useState({})

    - cliente es la variable que contiene el estado
    - setCliente es la funcion que modifica el estado de cliente
    - useState({}) es el valor inicial de la variable

    puedo tener multiples states por componentes.

    React reacciona en base al state. Cada vez que el state cambia la app de react va a renderizar y actualizarse con esos cambios.

    Las variables solo se modifican por medio de la funcion nunca por asignacion.

    Reglas de los HOOKS:
    
    - Se deben colocar en la parte superior de los componentes antes del return y antes de otras funciones.
    - No se deben colocar dentro de condicionales, tampoco despues del return.

--------------------------- HOOK useEffect ------------------------------------

  useEffect siempre es un callback que se ejecuta cuando un state cambia o cuando el componente esta listo.

  Usos:

  Al ejecutarse automaticamente cuando el componente esta listo, es un excelente lugar para colocar codigo para consultar una API o LocalStorage.

  Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando ese cambio suceda

*/

import {useState, useEffect}  from 'react';
import Error from './Error';

const Formulario = ({ showcase, setShowcase, evento, setEvento}) => {

  const [nombreFiesta, setNombreFiesta] = useState('');
  const [productora, setProductora] = useState('');
  const [local, setLocal] = useState('');
  const [emailProductor, setEmailProductor] = useState('');
  const [fecha, setFecha] = useState('');
  const [detalles, setDetalles] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(evento).length > 0){
      setNombreFiesta(evento.nombreFiesta)
      setProductora(evento.productora)
      setLocal(evento.local)
      setEmailProductor(evento.emailProductor)
      setFecha(evento.fecha)
      setDetalles(evento.detalles)
    }
  }, [evento]) // si paso la dependencia vacia solo se ejecuta 1 vez, cuando carga el componente

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //validacion del formulario, coloco las variables del state en un array para poder tener acceso al metodo includes y verificar si alguna de las variables viene como un str vacio

    if([nombreFiesta, productora, local, emailProductor, fecha, detalles].includes('')){
      setError(true)
      return;
    }

    setError(false);


    //objeto Showcase

    const objetoShowcase = {
      nombreFiesta, 
      productora, 
      local, 
      emailProductor, 
      fecha, 
      detalles
    }

    if(evento.id){
      // Editando el registro
      objetoShowcase.id = evento.id 
    

      const eventoActualizado = showcase.map( eventoState => eventoState.id === evento.id ? objetoShowcase : eventoState )

      setShowcase(eventoActualizado)
      setEvento({})



    }else{
      //Nuevo Registro
      objetoShowcase.id = generarId()
      setShowcase([...showcase, objetoShowcase])

    }


    //console.log(objetoShowcase)

    

    //reiniciar el form
    setNombreFiesta('')
    setProductora('')
    setLocal('')
    setEmailProductor('')
    setFecha('')
    setDetalles('');

  }


  return (

    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center text-neon">Seguimiento de Fechas</h2>

        <p className="text-lg mt-5 text-center text-gray-light mb-10">
          Añade tus fiestas y {''}
          <span className="text-green-500 font-bold text-neon">administralas</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-darkest shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

          { error && <Error><p>Todos los campos son Obligatorios</p></Error> }
          <div className="mb-5">
            <label htmlFor="fiesta" className="block text-neon uppercase font-bold">Nombre Fiesta</label>
            {/* htmlFor hace referencia al id del input correspondiente */}
            <input 
              id="fiesta"
              type="text" 
              placeholder="Nombre de la Fiesta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-darkest  rounded-md bg-gray-light"
              value={nombreFiesta} // variable state
              onChange={ (e) => setNombreFiesta(e.target.value) } /* onChange es un evento de react, cada que cambie el input modificamos el state con su funcion.

              Eventos:
              Son camelCase.

        
              */
            
            />
          </div>
          <div className="mb-5">
            <label htmlFor="productora" className="block text-neon uppercase font-bold">Nombre Productora</label>
            {/* htmlFor hace referencia al id del input correspondiente */}
            <input 
              id="productora"
              type="text" 
              placeholder="Nombre de la Productora"
              className="border-2 w-full p-2 mt-2 placeholder-gray-darkest bg-gray-light rounded-md" 
              value={productora} // variable state
              onChange={ (e) => setProductora(e.target.value) }
            
            />
          </div>

          <div className="mb-5">
            <label htmlFor="local" className="block text-neon uppercase font-bold">Nombre Local</label>
            {/* htmlFor hace referencia al id del input correspondiente */}
            <input 
              id="local"
              type="text" 
              placeholder="Nombre del Local"
              className="border-2 w-full p-2 mt-2 placeholder-gray-darkest bg-gray-light rounded-md" 
              value={local} // variable state
              onChange={ (e) => setLocal(e.target.value) }
            
            />
          </div>
          <div className="mb-5"> 
            <label htmlFor="email" className="block text-neon uppercase font-bold">Email Productor</label>
            {/* htmlFor hace referencia al id del input correspondiente */}
            <input 
              id="email"
              type="email" 
              placeholder="Email del Productor"
              className="border-2 w-full p-2 mt-2 placeholder-gray-darkest bg-gray-light rounded-md" 
              value={emailProductor} // variable state
              onChange={ (e) => setEmailProductor(e.target.value) }
            
            />
          </div>

          <div className="mb-5"> 
            <label htmlFor="showcase" className="block text-neon uppercase font-bold">Fecha Showcase</label>
            {/* htmlFor hace referencia al id del input correspondiente */}
            <input 
              id="showcase"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-darkest bg-gray-light rounded-md"
              value={fecha} // variable state
              onChange={ (e) => setFecha(e.target.value) }
            
            />
          </div>
          <div className="mb-5"> 
            <label htmlFor="detalles" className="block text-neon uppercase font-bold">Detalles</label>
            {/* htmlFor hace referencia al id del input correspondiente */}
            <textarea 
              id="detalles"
              className="border-2 w-full p-2 mt-2 placeholder-gray-darkest bg-gray-light rounded-md" 
              placeholder = "Agrega detalles del evento"
              value={detalles} // variable state
              onChange={ (e) => setDetalles(e.target.value) }
            />
          </div>

          <input 
            type="submit" 
            className="bg-neon w-full p-3 text-gray-dark rounded-md uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors"
            value={ evento.id ? 'Guardar Cambios' : 'Agregar Showcase' }  
          />
          
        </form>

    </div>
  )
}

export default Formulario
