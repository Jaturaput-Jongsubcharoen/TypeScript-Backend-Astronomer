// scripts/test-oracle.ts
// Use a safe import pattern (works without esModuleInterop)
import * as oracledb from "oracledb";

try {
  // Point directly to your Instant Client
  oracledb.initOracleClient({
    libDir:
      "D:\\mac\\Oracle-SQL\\instantclient-basic-windows.x64-21.19.0.0.0dbru\\instantclient_21_19",
  });
} catch (e: any) {
  // Ignore "already initialized" if you run this multiple times
  if (!/DPI-1082/i.test(e.message)) {
    console.error("initOracleClient failed:", e.message);
    process.exit(1);
  }
}

console.log("oracleClientVersionString:", oracledb.oracleClientVersionString);
console.log("oracleClientVersion:", oracledb.oracleClientVersion);