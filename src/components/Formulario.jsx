import { useState } from 'react'
import Respuesta from './Alert';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [clave2, setClave2] = useState('');
    const [error, setError] = useState('')

    const validarDatos = (e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || clave === '' || clave2 === '') {
            setError("Completa todos los campos");
            return;
        }
        if (clave !== clave2) {
            setError('Las contraseñas no coinciden');
            return;
        }
        setError('');
        setNombre('');
        setEmail('');
        setClave('');
        setClave2('');
        alert('Su registro fue exitoso')
    };
    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="form-group" onSubmit={validarDatos}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group" onSubmit={validarDatos}>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="clave"
                        className="form-control"
                        onChange={(e) => setClave(e.target.value)}
                        value={clave}
                    />
                </div>
                <div className="form-group" onSubmit={validarDatos}>
                    <label>Confirme su Contraseña</label>
                    <input
                        type="password"
                        name="clave2"
                        className="form-control"
                        onChange={(e) => setClave2(e.target.value)}
                        value={clave2}
                    />
                </div>
                <br/>
                <Respuesta error={error}/>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </>
    )
}
export default Formulario