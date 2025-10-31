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
                        className={`claim-form-text-input ${errors?.name ? "input-error" : ""}`} 
                        type="text" 
                        placeholder="Nombre *" 
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                />
                <input id="claimerSurname" 
                        className={`claim-form-text-input ${errors?.lastNames ? "input-error" : ""}`}
                        type="text"
                        placeholder="Apellidos *"
                        value={formData.lastNames}
                        onChange={(e) => handleChange("lastNames", e.target.value)}
                />
                <input id="claimerIdDoc" 
                        className={`claim-form-text-input ${errors?.lastNames ? "input-error" : ""}`}
                        type="text"
                        placeholder="DNI/NIE/Pasaporte *"
                        value={formData.documentNumber}
                        onChange={(e) => handleChange("documentNumber", e.target.value)}
                />
                <input id="claimerEmail" 
                        className={`claim-form-text-input ${errors?.email ? "input-error" : ""}`}
                        type="email"
                        placeholder="Dirección electrónica *"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                />
                <input id="claimerPhone" 
                        className={`claim-form-text-input ${errors?.phone ? "input-error" : ""}`}
                        type="text"
                        placeholder="Teléfono *"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>
        </>
    );
}