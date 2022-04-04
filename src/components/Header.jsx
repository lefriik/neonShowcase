/* 
    Componente 1 - header

    Un componente es una funcion.

    Los componentes se pueden escribir todos en un archivo de App.jsx pero al crear una carpeta de componentes tendre mayor orden en ellos.

    Tanto el archivo del componente como la funcion deben ir con la primera letra en mayusculas.

    Luego de crear el componente se debe importar en el app.jsx

*/

function Header() {


    return (
        <div>
            <h1 className="font-black text-5xl text-neon text-center md:w-1/2 mx-auto ">
            Showcase {''}
            <span className="text-red">Lefriik</span> 
        
            </h1>

            <img className="mx-auto" src="../../src/img/header.png" alt="header" />
        
        </div>
        
    )
}

export default Header;