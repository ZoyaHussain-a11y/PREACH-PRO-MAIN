// Database-related types and utilities
// Re-export Prisma types for convenience
export type { Prisma } from '@prisma/client';

// Database operation result types
export interface DatabaseOperationResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  count?: number;
}

// Query options and filters
export interface QueryOptions {
  orderBy?: Record<string, 'asc' | 'desc'>;
  include?: Record<string, boolean | object>;
  select?: Record<string, boolean>;
}
