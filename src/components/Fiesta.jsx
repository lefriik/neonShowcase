


const Fiesta = ({showcase, setEvento, eliminarEvento}) => {

   

    const { nombreFiesta, productora, local, emailProductor, fecha, detalles, id } = showcase 

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este Showcase?')

        if(respuesta){
            eliminarEvento(id)
        }
    }

  return (
      <>   
        <div className="text-white bg-gray-darkest rounded-xl m-3 px-5 py-10 my-8 shadow-md">
            <p className="font-bold mb-3 uppercase text-red">Fiesta: {''}
                <span className="font-normal normal-case text-white ">{ nombreFiesta } </span>
            </p>
            <p className="font-bold mb-3 uppercase text-red">Productora: {''}
                <span className="font-normal normal-case text-white">{productora} </span>
            </p>
            <p className="font-bold mb-3 uppercase text-red">Local: {''}
                <span className="font-normal normal-case text-white"> {local} </span>
            </p>
            <p className="font-bold mb-3 uppercase text-red">Mail Productor: {''}
                <span className="font-normal normal-case text-white">{emailProductor} </span>
            </p>
            <p className="font-bold mb-3 uppercase text-red">Fecha: {''}
                <span className="font-normal normal-case text-white">{fecha}</span>
            </p>
            <p className="font-bold mb-3 uppercase text-red">Detalles: {''}
                <span className="font-normal normal-case text-white">{detalles} </span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-neon text-black font-bold uppercase rounded-lg hover:bg-neon-dark "
                    onClick={() => setEvento(showcase)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red text-black font-bold uppercase rounded-lg hover:bg-red-dark "
                    onClick = { handleEliminar }

                >Eliminar</button>
            </div>

        </div>
    
    </>
  )
}

export default Fiesta