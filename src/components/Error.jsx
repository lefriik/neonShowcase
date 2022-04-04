

const Error = ({children}) => {

    /* Children recibe todo lo que se le pase desde el padre, incluse html*/
  return (
    <div className='bg-red text-white text-center rounded-md p-3 uppercase font-bold mb-3'>
        {children}  
    </div>
  )
}

export default Error