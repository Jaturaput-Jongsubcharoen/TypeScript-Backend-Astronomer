// src/config/env.ts
import * as dotenv from "dotenv";
dotenv.config();

function requireEnv(name: string, fallback?: string) {
  const v = process.env[name] ?? fallback;
  if (v === undefined) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: parseInt(process.env.PORT || "8081", 10),
  ociLibDir: process.env.OCI_LIB_DIR,           // optional
  oraUser: requireEnv("ORA_USER"),
  oraPassword: requireEnv("ORA_PASSWORD"),
  oraConnectString: requireEnv("ORA_CONNECT_STRING"),
  poolMin: parseInt(process.env.ORA_POOL_MIN || "1", 10),
  poolMax: parseInt(process.env.ORA_POOL_MAX || "4", 10),
  poolInc: parseInt(process.env.ORA_POOL_INC || "1", 10),
};
