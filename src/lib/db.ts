// Database utilities - Prisma client wrapper
// Requires DATABASE_URL environment variable and `npx prisma generate` to be run

export interface CreateRequestData {
  name: string;
  phone: string;
  city: string;
  serviceType: string;
  nationality?: string;
  notes?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _prisma: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPrismaClient(): any {
  if (!process.env.DATABASE_URL) return null;
  if (_prisma) return _prisma;
  return null;
}
