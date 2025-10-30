export function NotificationAddressForm(){
    return (
        <>
            <div className="input-notificaciones">

                <h4>Domicilio para notificaciones</h4>

                <input id="claimerAddress" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Dirección *" 
                        name="direccion-reclamante"
                        required
                />
                <input id="claimerPostalCode" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Código Postal *" 
                        name="codigo-postal-reclamante"
                        required
                />
                <input id="claimerMunicipality" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Municipio *" 
                        name="municipio-reclamante"
                        required
                />
                <input id="claimerProvince" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="Provincia *" 
                        name="provincia-reclamante"
                        required
                />
                <input id="claimerCountry" 
                        className="claim-form-text-input" 
                        type="text" 
                        placeholder="País *" 
                        name="pais-reclamante"
                        required
                />
            </div>
        </>
    );
}