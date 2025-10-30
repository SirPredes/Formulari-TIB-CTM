export type formData = {
    name: {value: string},
    surnames: {value: string},
    idDocument: {value: string},
    email: {value: string},
    phone: {value: string},
    address: {value: string},
    cp: {value: string},
    municipality: {value: string},
    province: {value: string},
    country: {value: string},
    queryType: {
        value: "Reclamación" | 
                "Sugerencia"
    },
    requestField: {
        value: "Bus" | 
                "Tren/Metro" | 
                "Sistema tarifario" | 
                "Otros"
    },
    claimDate: {value: Date},
    line: {value: string},
    numTicketCard: {value: string},
    claimLocation: {value: string},
    isResponseRequired: {value: boolean},
    responseLanguage: {value: "Català" | "Castellano"},
    claimFile: {value: File | null},
    iPresent: {value: string},
    iRequest: {value: string}
}