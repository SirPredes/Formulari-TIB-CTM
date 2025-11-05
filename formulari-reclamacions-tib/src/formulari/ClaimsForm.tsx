import {PersonalDataForm} from './PersonalDataForm'
import {NotificationAddressForm} from './NotificationAddressForm'
import {ClaimBasicDataForm} from './ClaimBasicDataForm'
import type { ClaimPayload } from './ClaimPayload'
import type { ClaimFormData } from './ClaimFormData'
import '../index.css'
import { useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export function ClaimsForm() {

	const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
	const [loading, setLoading] = useState(false);
  	const [success, setSuccess] = useState(false); // Per mostrar missatges de validacio a s'usuari
	
	const [formData, setFormData] = useState<ClaimFormData>({
		claimDate: new Date().toISOString().slice(0, 16),
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
		recaptchaToken: "",
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
			"g-recaptcha-response": formData.recaptchaToken,
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
		console.log("S'ha cridat handleSubmit")
		
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		const payload = await buildPayload();

		try {
			const response = await fetch("https://api.tib.org/sgiws", { //"https://api.tib.org/sgiws"
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
		});

		//console.log(payload) //Per debugging

		if (response.ok) {
			setSuccess(true);
		} else {
			alert("Error al enviar la reclamación"); //Canviar per element de html
		}
		} catch {
			alert("Error de conexión"); //Canviar per element de html
		} finally {
			setLoading(false);
			console.log(success);
		}
	}
    return (
		<>{
			//FICAR AQUI UN ELEMENT PER MOSTRAR QUAN S'ENVII DE MANERA CORRECTA
		}
			<div className='formulario-tib'>
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

				<NotificationAddressForm formData={formData} setFormData={setFormData} errors={errors}/>

				<ClaimBasicDataForm formData={formData} setFormData={setFormData} errors={errors}/>

				<div className='aviso-legal-formulario'>
					<p><strong>Corresponsables del tratamiento: </strong>CONSORCI DE TRANSPORTS DE MALLORCA (CTM).</p>
					<p><strong>Finalidad: </strong>La finalidad del tratamiento es la gestión de sus reclamaciones o sugerencias y la mejora de la calidad de nuestros servicios.</p>
					<p><strong>Legitimación: </strong>La base jurídica del tratamiento es la relación jurídica con nuestros usuarios y nuestro interés legítimo en evaluar y mejorar nuestros servicios</p>
					<p><strong>Derechos: </strong>Tiene derecho a acceder, rectificar y suprimir los datos, a limitar su tratamiento, a la portabilidad de sus datos, a oponerse al tratamiento, a presentar una reclamación ante la autoridad de control competente.</p>
					<p><strong>Información adicional</strong>Puede consultar información adicional y detallada sobre Protección de Datos en la política de privacidad de RECLAMACIONES disponible <a href='placeholder.com'>aquí</a>. Puede contactar con el Delegado de Protección de Datos del CTM en: protecciodedades@consorcidetransports.com.</p>
				</div>

				<ReCAPTCHA
					className='recaptcha-formulari'
					sitekey='03AFcWeA6tlOf9EDt9uC5mM4jJXRzhNXej1x2cJ4C7TWyJ1txbmOG6tmoOIcPkT-EpT8pJsx7pnFRCgz_8mz88LAbaX61fe1HXUrgbfSqf3NI2sbQhuqd2pb4qZc-FvFGuu96Y6aILh9PlPRJehYA6YQH-Y8CT6R2_FfLzv6p-r7eIuMu8Uj7MMhzU8jqgcl6UctqO6-a4YqcdNj5P5W34kKKx-mAmrgXbTBGIB_ICIUj6WzsOgxLTiN-9FGIRLvL3zQKucBOKdRSrYzjwTT_rGXGsMs1xOsxlSYOKwulGHZvg6J0PRx7YC3qixf6cWjZPIIGBVNSLA5gzjY-mminElxfC7-RaLB1qwLbpge8kX9Y49VK7hCxDAnpIxwJfnX8ndgaM5EjdPlv8JsO-m6GrhLCKLudnxnFcUfuPG9yQZ_OqyMFp8Ro2TkWS7SDTGY3waKGavLh1CYBmy8Ely4ZENRN3DpxEVmTese8qrpZxKF6Oyq1bz0XXN5FF1dcX-xshtdKBmcyINJEHFTrdbOevbn_HYNcY4aXxLOtA9OuhobmMNzdZJY0P9ntBEhThFOnRFct4sqnhG0HGSw1ejr6hlwcS89kqSJQwayHkoeGbCZy4837oTYp4Y3okfrJgzRnZSZ8Gr0VtnTWcviRrzHoo9igRFB7C4uDqHSxzLwF8yL14qw91OFxobQCSQJLyAqYDrngl6SMwXegwzJRsoZ_njeZz7ntjSUvThm0VT87a-u07vU_PH0T6eYFysnkUhZ3TuLSEj4WMJj7EziNV1nn7E7eBGNn1azKdlIuZjYG4L5_F_zqXbkQH3SqjvoLwQHT5jxKnYKkqhorE8srUld4nZZLMJ4mp13brnzXSplQv8BHvOaf9WtIRPVdbfOXwABssZ58D1tHh4ay1e6t5iLUf8C8wxWxmCgLKs_94a1A2wh8AabO3Vsbhl6SSdxTbf-4b6anKq2lNVDNMf48p0vY5xnhITozhX_y-FjlwzpN6H_vn1SnoPPgtlLwboXbPbhf0fwv779BMMfs1QwFnWOdF0O_i1neRoFjxHYmu0h2XP37KqBaxtbWO8wWD-6LGDX3fmpchgY6rLBJ1xSG3WFc9ioDWffbljzJyErgOFuZr4MS5ldZRJJbQNeJaLjWraBm3SSbtJcHenyoJngVKI56F8lhP3FStSQo4B7erBLSPyarOHATXKuVePH7_9prWhxmEw5-jrN1Bj7bLS_iPIyjB9V6Gmu16qEArou6YkDPX4j2-VmVY3Su63ZdcHVUo2JrsSnakh5bFMkFDHVrcv-7Bqpc2cTI2Yjl0uyMjPqCZNDJu9zQYKw8y65qloNcAP3xav2-YhK_hF7hOMKGYot_QauxAlXS5ZPi2yhD6emfvnd2uktAhIY4j_aq5f-dKb7VXdLMGdDqw_XdP4uDLGZTAmux8aFDoxzGtVA'
					onChange={(token) => setFormData(prev => ({...prev, recaptchaToken: token || ""}))}
				/>

				<button className=''
						type='submit'
						disabled={loading}
				>

					{loading ? "Enviando..." : "Enviar"}

				</button>
			</form>
			</div>
		</>
	);
}