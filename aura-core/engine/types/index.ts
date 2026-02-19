// Central Export Point

// Consolidated master types (Source of Truth)
export * from './master.js';

// Other modules that extend functionality but don't conflict
export * from './inventory.js';
export * from './diagnosis.js';
export * from './report.js';

// Do NOT export identity/common directly to avoid TS2308 (Duplicate identifier)
// They are re-exported via master.js
