import { z } from 'zod';

/**
 * Validation utilities and common Zod schemas
 *
 * Usage:
 * - Import schemas: import { emailSchema, passwordSchema } from '@/lib/validation'
 * - Use validators: validateEmail(email)
 * - Format errors: formatZodErrors(error)
 */

// ============================================================================
// Common Schemas
// ============================================================================

/**
 * Email validation schema
 */
export const emailSchema = z.string().email('Invalid email address');

/**
 * Password validation schema with strength requirements
 */
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

/**
 * URL validation schema
 */
export const urlSchema = z.string().url('Invalid URL');

/**
 * Phone number validation schema (US format)
 */
export const phoneSchema = z
  .string()
  .regex(
    /^\+?1?\s*\(?[0-9]{3}\)?[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}$/,
    'Invalid phone number'
  );

/**
 * Username validation schema
 */
export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(20, 'Username must be at most 20 characters')
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    'Username can only contain letters, numbers, hyphens, and underscores'
  );

/**
 * Slug validation schema (for URLs)
 */
export const slugSchema = z
  .string()
  .min(1, 'Slug is required')
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    'Slug must be lowercase with hyphens only'
  );

/**
 * Pagination parameters schema
 */
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
});

/**
 * Search query schema
 */
export const searchSchema = z.object({
  q: z.string().min(1, 'Search query is required').max(255),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
});

/**
 * Date range schema
 */
export const dateRangeSchema = z
  .object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  })
  .refine(data => data.to >= data.from, {
    message: 'End date must be after start date',
    path: ['to'],
  });

// ============================================================================
// Validation Functions
// ============================================================================

/**
 * Validate email address
 */
export const validateEmail = (email: string): boolean => {
  return emailSchema.safeParse(email).success;
};

/**
 * Validate password
 */
export const validatePassword = (password: string): boolean => {
  return passwordSchema.safeParse(password).success;
};

/**
 * Validate URL
 */
export const validateUrl = (url: string): boolean => {
  return urlSchema.safeParse(url).success;
};

/**
 * Format Zod validation errors into a user-friendly object
 */
export const formatZodErrors = (error: z.ZodError): Record<string, string> => {
  const formatted: Record<string, string> = {};

  error.issues.forEach(err => {
    const path = err.path.join('.');
    formatted[path] = err.message;
  });

  return formatted;
};

/**
 * Format Zod validation errors into an array of messages
 */
export const formatZodErrorsArray = (error: z.ZodError): string[] => {
  return error.issues.map(err => err.message);
};

/**
 * Safe parse with custom error formatting
 */
export const safeParse = <T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
):
  | { success: true; data: z.infer<T> }
  | { success: false; errors: Record<string, string> } => {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return { success: false, errors: formatZodErrors(result.error) };
};

// ============================================================================
// API Validation Helpers
// ============================================================================

/**
 * Create API response schema
 */
export const createApiResponseSchema = <T extends z.ZodTypeAny>(
  dataSchema: T
) => {
  return z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z.string().optional(),
    message: z.string().optional(),
  });
};

/**
 * Create paginated response schema
 */
export const createPaginatedResponseSchema = <T extends z.ZodTypeAny>(
  itemSchema: T
) => {
  return z.object({
    success: z.boolean(),
    data: z.array(itemSchema),
    pagination: z.object({
      page: z.number().int().positive(),
      limit: z.number().int().positive(),
      total: z.number().int().nonnegative(),
      totalPages: z.number().int().nonnegative(),
    }),
    error: z.string().optional(),
    message: z.string().optional(),
  });
};

// ============================================================================
// Form Validation Helpers
// ============================================================================

/**
 * Create a form schema with common fields
 */
export const createFormSchema = <T extends z.ZodRawShape>(fields: T) => {
  return z.object(fields);
};

/**
 * Validate form data and return formatted errors
 */
export const validateFormData = <T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
):
  | { success: true; data: z.infer<T> }
  | { success: false; errors: Record<string, string> } => {
  return safeParse(schema, data);
};

// ============================================================================
// Export type inference helpers
// ============================================================================

/**
 * Infer type from schema
 * Usage: type User = InferSchema<typeof userSchema>
 */
export type InferSchema<T extends z.ZodTypeAny> = z.infer<T>;
