module.exports = {
    // Format date as 'MM/DD/YYYY'
    format_date: (date) => {
      return date.toLocaleDateString();
    },
  
    // Format time as 'HH:MM AM/PM'
    format_time: (date) => {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
  
    // Compare two values (useful for conditional rendering in templates)
    eq: (a, b) => {
      return a === b;
    },
  };
  