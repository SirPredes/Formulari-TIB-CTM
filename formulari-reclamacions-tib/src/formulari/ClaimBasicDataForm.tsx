import type { ClaimFormData } from "./ClaimFormData";

interface ClaimBasicDataFormProps{
     formData: ClaimFormData;
     setFormData: React.Dispatch<React.SetStateAction<ClaimFormData>>;
     errors?: {[Key: string]: boolean};
}

export function ClaimBasicDataForm({formData, setFormData, errors}: ClaimBasicDataFormProps){
    const handleChange = (field: keyof ClaimFormData, value: string) => {
        setFormData(prev => ({...prev, [field]: value}));
    }
    const handleFileChange = (file: File | null) => {
        setFormData(prev => ({...prev, archivo: file}));
    }
    return (
        <>
            <div className="parent-basic-data-form">
                <h4>Datos Básicos para tu reclamación</h4>
                <div className="input-basic-data-form">
                    <fieldset className="input-tipo radio-input">

                        <p className="input-text"><strong>Tipo de consulta *</strong></p> {// Mirar com ho he de fer per a que no sigui sa lletra massa gruixada ni massa prima
                        }

                        <div className="radio-option">
                            <input type="radio" 
                                id="reclamacion" 
                                name="tipo-consulta"
                                value={"1"}
                                checked={formData.claimType === "1"}
                                onChange={(e) => handleChange("claimType", e.target.value)}
                            />
                            <label htmlFor="reclamacion">Reclamación</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                    id="sugerencia" 
                                    name="tipo-consulta"
                                    value={"2"}
                                    checked={formData.claimType === "2"}
                                    onChange={(e) => handleChange("claimType", e.target.value)}
                            />
                            <label htmlFor="sugerencia">Sugerencia</label>
                        </div>
                    </fieldset>
                    <p className={`${errors?.claimType ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                    <fieldset className="input-ambito  radio-input">

                        <p className="input-text"><strong>Ámbito de reclamación *</strong></p>
                        
                        <div className="radio-option">
                            <input type="radio" 
                                id="Bus" 
                                name="ambito-reclamacion"
                                value={"1"}
                                checked={formData.ambito === "1"}
                                onChange={(e) => handleChange("ambito", e.target.value)}
                            />
                            <label htmlFor="Bus">Bus</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="tren-metro" 
                                name="ambito-reclamacion"
                                value={"2"}
                                checked={formData.ambito === "2"}
                                onChange={(e) => handleChange("ambito", e.target.value)}
                            />
                            <label htmlFor="tren-metro">Tren/Metro</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="sistema-tarifario" 
                                name="ambito-reclamacion"
                                value={"3"}
                                checked={formData.ambito === "3"}
                                onChange={(e) => handleChange("ambito", e.target.value)}
                            />
                            <label htmlFor="sistema-tarifario">Sistema tarifario</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="otros" 
                                name="ambito-reclamacion"
                                value={"4"}
                                checked={formData.ambito === "4"}
                                onChange={(e) => handleChange("ambito", e.target.value)}
                            />
                            <label htmlFor="otros">Otros</label>
                        </div>
                    </fieldset>
                    <p className={`${errors?.ambito ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                </div>
                <div className="input-fecha-linea-billete-lugar">
                    <div className="input-agrupa2">
                        <div className="input-fecha-detalle">
                        <p className="input-text"><strong>Fecha incidencia: *</strong></p>
                        <input id="claimDate" 
                                type="datetime-local" 
                                name="fecha-reclamacion"
                                value={formData.claimDate}
                                onChange={(e) => handleChange("claimDate", e.target.value)}
                        />
                        </div>
                        <div className="input-linea-detalle">
                            <input id="claimline" 
                                className="claim-form-text-input" 
                                type="text" 
                                placeholder="Línea utilizada *" 
                                name="linea-reclamacion"
                                value={formData.linea}
                                onChange={(e) => handleChange("linea", e.target.value)}
                            />
                            <p className={`${errors?.linea ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>
                        </div>
                    </div>
                    <div className="input-agrupa2">
                        <div className="input-tarjeta-billete-detalle">
                        <input id="claim-ticket" 
                                className="claim-form-text-input" 
                                type="text" 
                                placeholder="Número de targeta o billete *" 
                                name="targeta-billete-reclamante"
                                value={formData.ticket}
                                onChange={(e) => handleChange("ticket", e.target.value)}
                        />
                        <p className={`${errors?.ticket ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>
                        </div>
                        <div className="input-lugar-detalle">
                            <input id="claim-location" 
                                    className="claim-form-text-input" 
                                    type="text" 
                                    placeholder="Lugar de la incidencia *" 
                                    name="lugar-reclamacion"
                                    value={formData.lugar}
                                    onChange={(e) => handleChange("lugar", e.target.value)}
                            />
                            <p className={`${errors?.lugar ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>
                        </div>
                    </div>
                </div>
                <div className="parent-requerida-idioma">
                    <fieldset className="input-respuesta-requerida radio-input">

                        <p className="input-text"><strong>¿Tu reclamación requiere respuesta? *</strong></p>

                        <div className="radio-option">
                            <input type="radio" 
                                id="respuesta-no" 
                                name="respuesta-reclamacion-requerida"
                                value={"N"}
                                checked={formData.respuesta === "N"}
                                onChange={(e) => handleChange("respuesta", e.target.value)}
                            />
                            <label htmlFor="respuesta-no">No</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="respuesta-si" 
                                name="respuesta-reclamacion-requerida"
                                value={"Y"}
                                checked={formData.respuesta === "Y"}
                                onChange={(e) => handleChange("respuesta", e.target.value)}
                            />
                            <label htmlFor="respuesta-si">Si</label>
                        </div>
                    </fieldset>
                    <p className={`${errors?.idioma ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>
                    
                    <fieldset className="input-idioma-respuesta  radio-input">

                        <p className="input-text"><strong>Idioma de la consulta *</strong></p>

                        <div className="radio-option">
                            <input type="radio" 
                                id="idiomaCatala" 
                                name="idioma-respuesta"
                                value={"CA"}
                                checked={formData.idioma === "CA"}
                                onChange={(e) => handleChange("idioma", e.target.value)}
                            />
                            <label htmlFor="idiomaCatala">Català</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" 
                                id="idiomaCastellano" 
                                name="idioma-respuesta"
                                value={"ES"}
                                checked={formData.idioma === "ES"}
                                onChange={(e) => handleChange("idioma", e.target.value)}
                            />
                            <label htmlFor="idiomaCastellano">Castellano</label>
                        </div>
                    </fieldset>
                    <p className={`${errors?.idioma ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                </div>
                <div className="parent-archivo">
                    <div className="input-archivo">
                        <input type="file" 
                                id="claimFile"
                                name="archivo-reclamacion"
                                onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                        />
                        <p><i>Extensión del fichero adjunto permitida: zip, rar, bmp, doc, docx, pdf, jpg, jpeg, png. </i></p>
                        <p><i>Tamaño máximo: 25MB.</i></p>
                    </div>
                </div>
                <div className="parent-expongo-solicito">
                    <p className="input-text max-characters">Máximo 4000 caracteres</p>
                    <div className="input-textarea">

                        <textarea id="claimExpose"
                                name="expongo-reclamacion"
                                rows={4}
                                cols={80}
                                placeholder="Expongo *"
                                value={formData.expongo}
                                onChange={(e) => handleChange("expongo", e.target.value)}
                        />
                    </div>
                    <p className={`${errors?.expongo ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>
                    <p className="input-text max-characters">Máximo 4000 caracteres</p>
                    <div className="input-textarea">
                        
                        <textarea id="claimRequest"
                                name="solicito-reclamacion"
                                rows={4}
                                cols={80}
                                placeholder="Solicito *"
                                value={formData.solicito}
                                onChange={(e) => handleChange("solicito", e.target.value)}
                        />
                    </div>
                    <p className={`${errors?.solicito ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>
                </div>
            </div>
        </>
    );
}