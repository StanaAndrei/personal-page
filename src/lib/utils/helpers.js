// src/lib/utils/helpers.js

// Add any helper functions you might need later
// Example: Formatting dates, calculating durations, etc.

export function formatDate(dateString) {
    // Basic date formatting example
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}