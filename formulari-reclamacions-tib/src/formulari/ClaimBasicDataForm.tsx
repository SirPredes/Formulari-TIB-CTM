export function ClaimBasicDataForm(){
    return (
        <>
            <div className="parent-basic-data-form">
                <h4>Datos Básicos para tu reclamación</h4>
                <div className="input-basic-data-form">
                    <fieldset className="input-tipo radio-input">

                        <p className="input-text">Tipo de consulta *</p>

                        <div className="radio-option">
                            <input type="radio" 
                                id="reclamacion" 
                                name="tipo-consulta"
                                required
                            />
                            <label htmlFor="reclamacion">Reclamación</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                    id="sugerencia" 
                                    name="tipo-consulta"
                            />
                            <label htmlFor="sugerencia">Sugerencia</label>
                        </div>
                    </fieldset>
                    <fieldset className="input-ambito  radio-input">

                        <p className="input-text">Ámbito de reclamación *</p>
                        
                        <div className="radio-option">
                            <input type="radio" 
                                id="Bus" 
                                name="ambito-reclamacion"
                                required
                            />
                            <label htmlFor="Bus">Bus</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="tren-metro" 
                                name="ambito-reclamacion"
                            />
                            <label htmlFor="tren-metro">Tren/Metro</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="sistema-tarifario" 
                                name="ambito-reclamacion"
                            />
                            <label htmlFor="sistema-tarifario">Sistema tarifario</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="otros" 
                                name="ambito-reclamacion"
                            />
                            <label htmlFor="otros">Otros</label>
                        </div>
                    </fieldset>
                </div>
                <div className="input-fecha-linea-billete-lugar">
                    <div className="input-fecha-detalle">
                        <p className="input-text">Fecha incidencia: *</p>
                        <input id="claimDate" type="datetime-local" name="fecha-reclamacion"/>
                    </div>
                    <div className="input-linea-detalle">
                        <input id="claimline" 
                            className="claim-form-text-input" 
                            type="text" 
                            placeholder="Línea utilizada *" 
                            name="linea-reclamacion"
                        />
                    </div>
                    <div className="input-tarjeta-billete-detalle">
                        <input id="claim-ticket" 
                                className="claim-form-text-input" 
                                type="text" 
                                placeholder="Número de targeta o billete *" 
                                name="targeta-billete-reclamante"
                        />
                    </div>
                    <div className="input-lugar-detalle">
                        <input id="claim-location" 
                                className="claim-form-text-input" 
                                type="text" 
                                placeholder="Lugar de la incidencia *" 
                                name="lugar-reclamacion"
                        />
                    </div>
                </div>
                <div className="parent-requerida-idioma">
                    <fieldset className="input-respuesta-requerida radio-input">

                        <p className="input-text">¿Tu reclamación requiere respuesta? *</p>

                        <div className="radio-option">
                            <input type="radio" 
                                id="respuesta-no" 
                                name="respuesta-reclamacion-requerida"
                                required
                            />
                            <label htmlFor="respuesta-no">No</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="respuesta-si" 
                                name="respuesta-reclamacion-requerida"
                            />
                            <label htmlFor="respuesta-si">Si</label>
                        </div>
                    </fieldset>
                    <fieldset className="input-idioma-respuesta  radio-input">

                        <p className="input-text">Idioma de la consulta *</p>

                        <div className="radio-option">
                            <input type="radio" 
                                id="idiomaCatala" 
                                name="idioma-respuesta"
                                required
                            />
                            <label htmlFor="idiomaCatala">Català</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="idiomaCastellano" 
                                name="idioma-respuesta"
                            />
                            <label htmlFor="idiomaCastellano">Castellano</label>
                        </div>
                    </fieldset>
                </div>
                <div className="parent-archivo">
                    <div className="input-archivo">
                        <input type="file" 
                                id="claimFile"
                                name="archivo-reclamacion"
                        />
                        <p><i>Extensión del fichero adjunto permitida: zip, rar, bmp, doc, docx, pdf, jpg, jpeg, png. </i></p>
                        <p><i>Tamaño máximo: 25MB.</i></p>
                    </div>
                </div>
                <div className="parent-expongo-solicito">
                    <p className="input-text">Máximo 4000 caracteres</p>
                    <div className="input-textarea">

                        <textarea id="claimExpose"
                                name="expongo-reclamacion"
                                rows={4}
                                cols={80}
                                placeholder="Expongo *"
                                required
                        />
                    </div>
                    <p className="input-text">Máximo 4000 caracteres</p>
                    <div className="input-textarea">
                        
                        <textarea id="claimRequest"
                                name="solicito-reclamacion"
                                rows={4}
                                cols={80}
                                placeholder="Solicito *"
                                required
                        />
                    </div>
                </div>
            </div>
        </>
    );
}