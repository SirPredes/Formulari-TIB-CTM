import type { ClaimFormData } from "./ClaimFormData";
interface PersonalDataFormProps {
    formData: ClaimFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClaimFormData>>;
    errors?: { [key: string]: boolean }
}


export function PersonalDataForm({formData, setFormData, errors}: PersonalDataFormProps){
    
    const handleChange = (field: keyof ClaimFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <div className="input-datos-personales">

                <h4>Datos Personales</h4>
                
                <input id="claimerName" 
                        className="claim-form-text-input"
                        type="text" 
                        placeholder="Nombre *" 
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                />
                <p className={`${errors?.name ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                <input id="claimerSurname" 
                        className="claim-form-text-input"
                        type="text"
                        placeholder="Apellidos *"
                        value={formData.lastNames}
                        onChange={(e) => handleChange("lastNames", e.target.value)}
                />
                <p className={`${errors?.lastNames ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                <input id="claimerIdDoc" 
                        className="claim-form-text-input"
                        type="text"
                        placeholder="DNI/NIE/Pasaporte *"
                        value={formData.documentNumber}
                        onChange={(e) => handleChange("documentNumber", e.target.value)}
                />
                <p className={`${errors?.documentNumber ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                <input id="claimerEmail" 
                        className="claim-form-text-input"
                        type="email"
                        placeholder="Dirección electrónica *"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                />
                <p className={`${errors?.email ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

                <input id="claimerPhone" 
                        className="claim-form-text-input"
                        type="text"
                        placeholder="Teléfono *"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                />
                <p className={`${errors?.phone ? "input-error" : "input-no-error"}`}>Este campo es obligatorio</p>

            </div>
        </>
    );
}