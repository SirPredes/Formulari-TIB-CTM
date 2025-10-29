export function ClaimBasicDataForm(){
    return (
        <>
            <div className="parent-tipo-ambito">
                <div className="input-tipo">

                    <p>Tipo de consulta *</p>

                    <input type="radio" 
                            id="reclamacion" 
                            name="tipo-consulta"
                    />
                    <label htmlFor="reclamacion">Reclamación</label>

                    <input type="radio" 
                            id="sugerencia" 
                            name="tipo-consulta"
                    />
                    <label htmlFor="sugerencia">Sugerencia</label>
                </div>
                <div className="input-ambito">

                    <p>Ámbito de reclamación *</p>

                    <input type="radio" 
                            id="Bus" 
                            name="ambito-reclamacion"
                    />
                    <label htmlFor="Bus">Bus</label>

                    <input type="radio" 
                            id="tren-metro" 
                            name="ambito-reclamacion"
                    />
                    <label htmlFor="tren-metro">Tren/Metro</label>

                    <input type="radio" 
                            id="sistema-tarifario" 
                            name="ambito-reclamacion"
                    />
                    <label htmlFor="sistema-tarifario">Sistema tarifario</label>

                    <input type="radio" 
                            id="otros" 
                            name="ambito-reclamacion"
                    />
                    <label htmlFor="otros">Otros</label>
                </div>
            </div>
            <div className="input-fecha-linea-billete-lugar">
                <div className="input-fecha-detalle">
                    <p>Fecha incidencia: *</p>
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
                <div className="input-respuesta-requerida">

                    <p>¿Tu reclamación requiere respuesta? *</p>

                    <input type="radio" 
                            id="respuesta-no" 
                            name="respuesta-reclamacion-requerida"
                    />
                    <label htmlFor="respuesta-no">No</label>

                    <input type="radio" 
                            id="respuesta-si" 
                            name="respuesta-reclamacion-requerida"
                    />
                    <label htmlFor="respuesta-si">Si</label>
                </div>
                <div className="input-idioma-respuesta">

                    <p>Tipo de consulta *</p>

                    <input type="radio" 
                            id="idiomaCatala" 
                            name="idioma-respuesta"
                    />
                    <label htmlFor="idiomaCatala">Català</label>

                    <input type="radio" 
                            id="idiomaCastellano" 
                            name="idioma-respuesta"
                    />
                    <label htmlFor="idiomaCastellano">Castellano</label>
                </div>
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
                <div className="input-expongo">
                    <p>Máximo 4000 caracteres</p>
                    <textarea id="claimExpose"
                            name="expongo-reclamacion"
                            rows={4}
                            cols={80}
                            placeholder="Expongo *"
                    />
                </div>
                <div className="input-solicito">
                    <p>Máximo 4000 caracteres</p>
                    <textarea id="claimRequest"
                            name="solicito-reclamacion"
                            rows={4}
                            cols={80}
                            placeholder="Solicito *"
                    />
                </div>
            </div>
        </>
    );
}