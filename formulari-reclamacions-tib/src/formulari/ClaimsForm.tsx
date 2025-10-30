import {PersonalDataForm} from './PersonalDataForm'
import {NotificationAddressForm} from './NotificationAddressForm'
import {ClaimBasicDataForm} from './ClaimBasicDataForm'
import '../index.css'

export function ClaimsForm() {
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

			<form action="">
				<PersonalDataForm/>

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

				<button type='submit' form='claimsForm' value="submit">
					Enviar
				</button>
			</form>
		</>
	);
}