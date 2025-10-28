export function PersonalDataForm(){
    return (
        <>
            <h4>Datos Personales</h4>
            <input id="claimerName" className="claim-form-text-input" type="text" placeholder="Nombre *"/>
            <input id="claimerSurname" className="claim-form-text-input" type="text" placeholder="Apellidos *"/>
            <input id="claimerIdDoc" className="claim-form-text-input" type="text" placeholder="DNI/NIE/Pasaporte *"/>
            <input id="claimerEmail" className="claim-form-text-input" type="text" placeholder="Dirección electrónica *"/>
            <input id="claimerPhone" className="claim-form-text-input" type="text" placeholder="Teléfono *"/>
        </>
    );
}