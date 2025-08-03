/*
|---------------------------------------------------------------------------
| JavaScript entrypoint for running ace commands
|---------------------------------------------------------------------------
|
| DO NOT MODIFY THIS FILE AS IT WILL BE OVERRIDDEN DURING THE BUILD
| PROCESS.
|
| Since we cannot run TypeScript source code directly with `node`, we
| register `ts-node` to handle TypeScript files, then import the actual
| ace entrypoint in TypeScript.
|
*/

/**
 * Register hook to process TypeScript files using ts-node
 */
import 'ts-node/register'

/**
 * Import ace console entrypoint written in TypeScript
 */
await import('./bin/console.ts')
