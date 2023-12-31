import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { log } from 'console';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('DATABASE_URL not found in .env file');
}

export default {
    schema : './src/lib/supabase/scheme.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
} satisfies Config;