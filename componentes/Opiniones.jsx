'use client'

import React, { useState } from 'react';
import estiloOpiniones from "@/estilos/opiniones.module.css";
import StarRating from './StarRating';

function Opiniones() {
    const [nombreUsuario, setNombreUsuario] = useState(''); //almacena nombre usuario
    const [comentarios, setComentarios] = useState([
        { nombre: 'Sofia', comentario: 'Excelente atención', calificacion: 5 },
        { nombre: 'Romina', comentario: 'Muy buenos tratamientos', calificacion: 4 }
    ]); //almacena comentarios
    const [nuevoComentario, setNuevoComentario] = useState(''); //manejo comentario nvo
    const [calificacion, setCalificacion] = useState(0); //almacena calificacion

    //para tomar el comentario del textArea
    const handleChange = (event) => {
        setNuevoComentario(event.target.value);
    };

    //para tomar el nombre del input
    const handleNombreChange = (event) => {
        setNombreUsuario(event.target.value);
    };

    //actualiza el estado de la calificación con el nvo valor recibido por onClick
    const handleRatingChange = (valor) => {
        setCalificacion(valor);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((nuevoComentario.trim() !== '') && (nombreUsuario.trim() !== '')) {
            setComentarios([...comentarios, { nombre: nombreUsuario, comentario: nuevoComentario, calificacion }]);
            setNuevoComentario('');
            setNombreUsuario('');
            setCalificacion(0);
        }
    };

    return (
        <div>
            <p className={estiloOpiniones.textos}>Estuviste en nuestro spa? contanos tu experiencia!
                <br /> Tu opinión es muy importante para nosotros!</p>

            {/* Formulario para agregar comentarios */}
            <form className={estiloOpiniones.formulario} onSubmit={handleSubmit}>
                <input
                    type="text"
                    id='nombre'
                    value={nombreUsuario}
                    onChange={handleNombreChange}
                    placeholder="Tu nombre"
                    className={estiloOpiniones.inputs}
                    required
                />
                <br />
                <br />
                <StarRating
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    inactiveColor="#ddd"
                    value={calificacion}
                    onChange={handleRatingChange}
                />
                <textarea
                    className={estiloOpiniones.inputs}
                    id='opinion'
                    value={nuevoComentario}
                    onChange={handleChange}
                    placeholder="Dejanos tu opinión acá"
                    rows="4"
                    cols="50"
                    required
                />
                <br />
                <button type="submit" className={estiloOpiniones.boton}>Enviar comentario</button>

                <div>
                    {/* Visualizar comentarios */}
                    <ul className={estiloOpiniones.lista}>
                        {comentarios.map((comentario, index) => (
                            <li
                                className={estiloOpiniones.elementoLista}
                                key={index}
                            >
                                <StarRating
                                    count={5}
                                    size={16}
                                    activeColor="#ffd700"
                                    inactiveColor="#ddd"
                                    value={comentario.calificacion}
                                    edit={false} // No permite editar la calificación en los comentarios
                                />
                                <strong>{comentario.nombre}:</strong> {comentario.comentario}
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Opiniones;