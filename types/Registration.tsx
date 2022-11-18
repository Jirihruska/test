import { UseFormReturn } from 'react-hook-form';

export interface RegistrationInputData {
  id: number,
  name: string,
  type: string,
  required: boolean,
}

export interface RegistrationInputFields {
  name: string,
  surname: string,
  email: string,
  password: string,
}