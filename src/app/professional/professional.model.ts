export interface Professional {
    id?: number
    name: string
    cpf: string
    dateOfBirth: Date
    phone: string
    email: string
    password: string
    gender: string
    maritalStatus: string
    crm: string
    specialty: string
    zipcode: string
    street: string
    number: string
    district: string
    city: string
    state: string
    complements: string
}

export interface UserProfessional {
    username: string
    password: string
}