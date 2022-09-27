const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y { }
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form className="bg-white shadow-md rounded-md py-10 px-5">
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="nombre" type="text" placeholder="Nombre de la Mascota" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="propietario" type="text" placeholder="Nombre del Propietario" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">E-mail Propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="email" type="email" placeholder="E-mail del Propietario" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="alta" type="date" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
                    <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas" placeholder="Describe los síntomas" />
                </div>

                <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors" type="submit" value="Agregar Paciente" />
            </form>
        </div>
    )
}

export default Formulario