export function NotificationAddressForm(){
    return (
        <>
            <>
            <h4>Domicilio para notificaciones</h4>
            <input id="claimerAddress" className="claim-form-text-input" type="text" placeholder="Nombre *"/>
            <input id="claimerPostalCode" className="claim-form-text-input" type="text" placeholder="Código Postal *"/>
            <input id="claimerMunicipality" className="claim-form-text-input" type="text" placeholder="Municipio *"/>
            <input id="claimerProvince" className="claim-form-text-input" type="text" placeholder="Provincia *"/>
            <input id="claimerCountry" className="claim-form-text-input" type="text" placeholder="País *"/>
        </>
        </>
    );
}