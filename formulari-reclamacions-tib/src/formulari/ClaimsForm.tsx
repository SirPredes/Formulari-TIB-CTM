import {PersonalDataForm} from './PersonalDataForm'
import {NotificationAddressForm} from './NotificationAddressForm'
import {ClaimBasicDataForm} from './ClaimBasicDataForm'
import type { ClaimPayload } from './ClaimPayload'
import type { ClaimFormData } from './ClaimFormData'
import '../index.css'
import { useState} from 'react'

export function ClaimsForm() {

	const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
	const [loading, setLoading] = useState(false);
  	const [success, setSuccess] = useState(false);
	
	const [formData, setFormData] = useState<ClaimFormData>({
		claimDate: "",
		linea: "",
		ticket: "",
		lugar: "",
		expongo: "",
		solicito: "",
		name: "",
		lastNames: "",
		email: "",
		phone: "",
		address: "",
		postalCode: "",
		town: "",
		province: "",
		country: "España",
		documentNumber: "",
		respuesta: "N",
		idioma: "CA",
		ambito: "",
		claimType: "",
		archivo: null,
	});

	
	const getBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve((reader.result as string).split(",")[1]);
			reader.onerror = error => reject(error);
		});
	};

	
	const validateForm = (): boolean => {
		const newErrors: { [key: string]: boolean } = {};

		// Lista de campos obligatorios
		const requiredFields = [
			"claimDate",
			"linea",
			"ticket",
			"lugar",
			"expongo",
			"solicito",
			"name",
			"lastNames",
			"email",
			"phone",
			"address",
			"postalCode",
			"town",
			"province",
			"country",
			"documentNumber",
			"respuesta",
			"idioma",
			"ambito",
			"claimType",
		];

		requiredFields.forEach(field => {
			const value = formData[field as keyof typeof formData];
			if (!value || value.toString().trim() === ""){
				newErrors[field] = true;
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};


	
	const buildPayload = async (): Promise<ClaimPayload> => {
		const payload: ClaimPayload = {
			cardNumber: formData.ticket,
			claimDate: new Date(formData.claimDate).toISOString(),
			claimDescription: formData.expongo,
			claimReason: null,
			claimType: formData.claimType,
			claimerAddress: formData.address,
			claimerCountry: formData.country,
			claimerEmail: formData.email,
			claimerLastNames: formData.lastNames,
			claimerName: formData.name,
			claimerPhone: formData.phone,
			claimerPostalCode: formData.postalCode,
			claimerTown: formData.town,
			demand: formData.solicito,
			desiredResponse: formData.respuesta,
			documentNumber: formData.documentNumber,
			"g-recaptcha-response": "TOKEN_RECAPTCHA", // Integrar es captcha aqui
			incidenceLocation: formData.lugar,
			meansOfTransport: formData.ambito,
			meansOfTransportNumber: formData.linea,
			province: formData.province,
			responseLanguage: formData.idioma,
		};

		if (formData.archivo) {
			const base64 = await getBase64(formData.archivo);
			payload.attachedDocument = {
				filename: formData.archivo.name,
				contents: base64,
				contentType: "file"
			};
		}

		return payload;
	};


	const handleSubmit = async (e: React.FormEvent) => {
		
		e.preventDefault();
		if (!validateForm()) return; //Aqui he de fer que aparesquin els errors a nes camp que ho necessiti

		setLoading(true);
		const payload = await buildPayload();

		try {
			const response = await fetch("https://api.tib.org/sgiws", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
		});

		if (response.ok) {
			setSuccess(true);
		} else {
			alert("Error al enviar la reclamación"); //Canviar per element de html
		}
		} catch {
			alert("Error de conexión"); //Canviar per element de html
		} finally {
			setLoading(false);
		}
	}
    return (
		<>
			<div className='titulo-formulario'>
				<img src="https://www.tib.org/o/ctm-base-theme/images/Doc.svg"/>
				<h4>
					Formulario
				</h4>
			</div>
			<p className='explicacion-formulario'>
				Rellena el siguiente formulario para presentar una queja o realizar una sugerencia. Para una gestión ágil, aporta los detalles de los hechos referidos y adjunta la documentación que creas necesaria.
			</p>

			<form onSubmit={handleSubmit}>
				<PersonalDataForm formData={formData} setFormData={setFormData} errors={errors}/>

				<NotificationAddressForm/>

				<ClaimBasicDataForm/>

				<div className='aviso-legal-formulario'>
					<p><strong>Corresponsables del tratamiento: </strong>CONSORCI DE TRANSPORTS DE MALLORCA (CTM).</p>
					<p><strong>Finalidad: </strong>La finalidad del tratamiento es la gestión de sus reclamaciones o sugerencias y la mejora de la calidad de nuestros servicios.</p>
					<p><strong>Legitimación: </strong>La base jurídica del tratamiento es la relación jurídica con nuestros usuarios y nuestro interés legítimo en evaluar y mejorar nuestros servicios</p>
					<p><strong>Derechos: </strong>Tiene derecho a acceder, rectificar y suprimir los datos, a limitar su tratamiento, a la portabilidad de sus datos, a oponerse al tratamiento, a presentar una reclamación ante la autoridad de control competente.</p>
					<p><strong>Información adicional</strong>Puede consultar información adicional y detallada sobre Protección de Datos en la política de privacidad de RECLAMACIONES disponible <a href='placeholder.com'>aquí</a>. Puede contactar con el Delegado de Protección de Datos del CTM en: protecciodedades@consorcidetransports.com.</p>
				</div>

				{//Insertar aqui lo des captcha
				}

				<button type='submit' 
						form='claimsForm'
						disabled={loading}
				>

					{loading ? "Enviando..." : "Enviar"}

				</button>
			</form>
		</>
	);
}