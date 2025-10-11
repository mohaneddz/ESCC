export interface MainFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  school: string;
  year: string;
  instagram?: string;
}

export interface DepartmentPreferences {
  department1: string;
  department2: string;
  department3: string;
}

export interface MotivationEntry {
  work: string;
  experience: string;
  expectations: string;
}

export interface MotivationFormData {
  choice1: MotivationEntry;
  choice2: MotivationEntry;
  choice3: MotivationEntry;
}

export interface RegistrationPayload {
  mainData: MainFormData;
  departmentData: DepartmentPreferences;
  motivationData: MotivationFormData;
}
