
export type UserRole = 'Superadmin' | 'Admin Kantor' | 'Admin Lapangan' | 'User Biasa';

export interface User {
  id: number;
  fullName: string;
  username: string;
  password?: string; // Should not be stored long term
  role: UserRole;
  isActive: boolean;
}

export interface Project {
  id: number;
  name: string;
  code: string;
  location: string;
  contractValue: number;
  startDate: string;
  targetEndDate: string;
  status: 'Ongoing' | 'Completed' | 'Pending';
  assignedUsers: number[]; // User IDs
}

export interface MasterWorkItem {
  id: number;
  code: string;
  division: string;
  name: string;
  unit: string;
}

export interface MasterMaterial {
  id: number;
  name: string;
  unit: string;
}

export interface RABItem {
  id: number;
  projectId: number;
  masterItemId: number;
  targetVolume: number;
  unitPrice: number;
  totalPrice: number;
  scheduleStartDate?: string;
  scheduleEndDate?: string;
}

export interface MaterialUsage {
  masterMaterialId: number;
  volumeUsed: number;
}

export interface Issue {
  id: number;
  description: string;
  category: 'Material' | 'Equipment' | 'Weather' | 'Manpower';
  status: 'Open' | 'In Progress' | 'Resolved';
}

export interface DailyReport {
  id: number;
  projectId: number;
  reporterId: number;
  reportDate: string;
  weather: 'Sunny' | 'Cloudy' | 'Rainy';
  notes: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  validatorId?: number;
  validationDate?: string;
  rejectionReason?: string;
  progressItems: ProgressItem[];
  photos: string[]; // URLs or base64 strings
  materialUsage: MaterialUsage[];
  issues: Issue[];
}

export interface ProgressItem {
  rabItemId: number;
  volumeCompleted: number;
}
