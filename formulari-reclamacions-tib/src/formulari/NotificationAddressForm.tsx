import type { ClaimFormData } from "./ClaimFormData";
interface NotificationAddressFormProps {
    formData: ClaimFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClaimFormData>>;
    errors?: { [key: string]: boolean }
}

export function NotificationAddressForm({formData, setFormData, errors}: NotificationAddressFormProps){

    const handleChange = (field: keyof ClaimFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <div className="input-notificaciones">

                <h4>Domicilio para notificaciones</h4>

                <input id="claimerAddress" 
                        className={`claim-form-text-input ${errors?.address ? "input-error" : ""}`}
                        type="text"
                        placeholder="Dirección *"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                />
                <input id="claimerPostalCode"
                        className={`claim-form-text-input ${errors?.postalCode ? "input-error" : ""}`}
                        type="text"
                        placeholder="Código Postal *"
                        value={formData.postalCode}
                        onChange={(e) => handleChange("postalCode", e.target.value)}
                />
                <input id="claimerMunicipality" 
                        className={`claim-form-text-input ${errors?.town ? "input-error" : ""}`}
                        type="text"
                        placeholder="Municipio *"
                        value={formData.town}
                        onChange={(e) => handleChange("town", e.target.value)}
                />
                <input id="claimerProvince" 
                        className={`claim-form-text-input ${errors?.province ? "input-error" : ""}`}
                        type="text"
                        placeholder="Provincia *"
                        value={formData.province}
                        onChange={(e) => handleChange("province", e.target.value)}
                />
                <input id="claimerCountry" 
                        className={`claim-form-text-input ${errors?.country ? "input-error" : ""}`}
                        type="text"
                        placeholder="País *"
                        value={formData.country}
                        onChange={(e) => handleChange("country", e.target.value)}
                />
            </div>
        </>
    );
}