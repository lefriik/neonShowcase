
import Fiesta from "./Fiesta"

const ListadoLocales = ({showcase, setEvento, eliminarEvento}) => {



  
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-3 ">

        { showcase && showcase.length ? (

            <>  

              <h2 className="font-black text-3xl text-center text-red">Listado de Showcase</h2>
              <p className="text-gray-light text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-teal-300 text-red">Showcase</span>
              </p>

              { showcase.map( showcase => 
              (
                <Fiesta 
                  key = {showcase.id}
                  showcase={showcase}
                  setEvento={setEvento}
                  eliminarEvento={eliminarEvento}
                />

                )
              )}
            </>

        ) : (
          <>
             <h2 className="font-black text-3xl text-center text-red">No hay Showcase Agendado</h2>
              <p className="text-gray-light text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-teal-300 text-red">Showcase</span>
              </p>
          
          </>
        ) }
        

        
    </div>
  )
}

export default ListadoLocales