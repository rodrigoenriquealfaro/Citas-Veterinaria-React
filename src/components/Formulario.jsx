import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    // Mostrar el error
    const [error, setError] = useState(false)

    // Se ejecuta cada vez que paciente cambie
    useEffect(() => {
        // Comprobando si un arreglo está vacio o no
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    // Generar ID
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return
        }
        // Para que desaparezca el error
        setError(false)

        // Construyendo el objeto de pacientes para rellenar los datos en App.jsx
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            // Editando el registro
            // El id que tengo en el registro previo se lo asigno al nuevo objetoPaciente
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            // Nuevo registro con nuevo id generado que se agrega a setPacientes
            objetoPaciente.id = generarId()
            // Tomar una copia de lo que ya existe en el arreglo de pacientes de App.jsx y le agregamos el objetoPaciente y se asigna a setPacientes
            setPacientes([...pacientes, objetoPaciente])
        }

        // Reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y { }
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-10">

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="nombre" type="text" placeholder="Nombre de la Mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="propietario" type="text" placeholder="Nombre del Propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">E-mail Propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="email" type="email" placeholder="E-mail del Propietario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="alta" type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
                    <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas" placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors" type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
            </form>
        </div>
    )
}

export default Formulario