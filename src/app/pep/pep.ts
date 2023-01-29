export interface Pep {
  id?: string,
  pepNumber: string,
  patientId: string,
  doctorId: string,
  status: string,
  prescription?: string,
  bloodType?: string,
  allergies?: string,
  createdAt?: any,
  updateAt?: any,
}
export interface PepLog {
  pepId: string,
  patient: string,
  doctor: string,
  action: string,
  createdAt: any,
}