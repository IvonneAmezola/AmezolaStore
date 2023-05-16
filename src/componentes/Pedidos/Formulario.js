import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';

const Formulario = () => {
    const [formularioEnviado, cambiarFormulario] = useState(false);

    return (
        <>
            <Formik>
                initialValues ={{
                    nombre: '',
                    correo: ''

                }}
                validate ={(valores) => {
                    let errores = {};

                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa tu nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,48}$/ - test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    if (!valores.correo) {
                        errores.correo = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El correo solo puede contener, letras, numeros, puntos y guiones'
                    }
                    if (!valores.direccion) {
                        errores.direccion = 'Por favor ingresa tu direccion de envio o si deseas recoger en sucursal'
                    } else if (!/^[0-9a-zA-ZÀ-ÿ\s]{1,48}$/ - test(valores.nombre)) {
                        errores.nombre = 'La direccion solo puede contener letras, numeros y espacios'
                    }
                    if (!valores.telefono) {
                        errores.telefono = 'Por favor ingresa un numero telefonico a 10 digitos'
                    } else if (!/^[0-9]+$/.test(valores.telefono)) {
                        errores.correo = 'El telefono solo puede contener numeros'
                    }
                    return errores
                }}
                onSubmit = {(valores, { resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
                {({errors}) => (


                    <Form className="formulario" >
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                id="nombre"
                            />
                            <ErrorMessage name='nombre' component={(=>
                            <div className='error'>{errors.name}</div>
                            )} />
                            
                        </div>

                        <div>
                            <label htmlFor="correo">Correo</label>
                            <Field
                                type="email"
                                name="correo"
                                placeholder="correo@correo.com"
                                id="correo"
                            />
                            <ErrorMessage name='correo' component={() =>
                            (<div className='error'>{errors.correo}</div>
                            )} />
                        </div>
                        <div>
                            <label htmlFor="direccion">Direccion</label>
                            <Field
                                name="mensaje"

                                placeholder="Direccion"
                                id="direccion"
                                
                            />
                            <p className='recoger'>Si desea recoger en la sucursal, solo ponga "recoger en sucursal" </p>
                            <ErrorMessage name='direccion' component={() =>
                            (<div className='error'>{errors.direccion}</div>
                            )} />
                            
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                            <Field
                                type="text"
                                name="telefono"
                                placeholder="Telefono"
                                id="telefono"
                            />
                            <ErrorMessage name='telefono' component={() =>
                            (<div className='error'>{errors.telefono}</div>
                            )} />
                        </div>

                        <button type="submit">Enviar datos de pedido</button>
                        {formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Formulario;