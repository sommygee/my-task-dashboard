// src/types.ts

export interface Task {
  id: string;                    // we'll use something like crypto.randomUUID()
  title: string;
  description?: string;          // optional
  status: 'pending' | 'completed';
  dueDate?: string;              // ISO format e.g. '2025-08-15'
  createdAt: string;             // ISO timestamp
  priority?: 'low' | 'medium' | 'high';
}