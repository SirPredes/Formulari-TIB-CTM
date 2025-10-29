export function PersonalDataForm(){
    return (
        <>
            <div className="input-datos-personales">

                <h4>Datos Personales</h4>
                
                <input id="claimerName" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Nombre *" 
                        name="nombre-reclamante"
                />
                <input id="claimerSurname" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Apellidos *" 
                        name="apellidos-reclamante"
                />
                <input id="claimerIdDoc" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="DNI/NIE/Pasaporte *" 
                        name="documento-id-reclamante"
                />
                <input id="claimerEmail" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Dirección electrónica *" 
                        name="email-reclamante"
                />
                <input id="claimerPhone" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Teléfono *" 
                        name="telefono-reclamante"
                />
            </div>
        </>
    );
}