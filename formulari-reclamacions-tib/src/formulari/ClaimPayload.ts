export interface ClaimPayload {
    cardNumber: string;
    claimDate: string;
    claimDescription: string;
    claimReason: null;
    claimType: string;
    claimerAddress: string;
    claimerCountry: string;
    claimerEmail: string;
    claimerLastNames: string;
    claimerName: string;
    claimerPhone: string;
    claimerPostalCode: string;
    claimerTown: string;
    demand: string;
    desiredResponse: string;
    documentNumber: string;
    "g-recaptcha-response": string;
    incidenceLocation: string;
    meansOfTransport: string;
    meansOfTransportNumber: string;
    province: string;
    responseLanguage: string;
    attachedDocument?: {
        filename: string;
        contents: string;
        contentType: string;
    };
}
