// Base Validation functions

// Validation lib
// for documentation see: https://www.npmjs.com/package/validator
const validator = require("validator");

// function to validate an id
// An id is a positive number with no sign (+,-, etc.)
// return Not a number or else cast as Number and return
//
function validateId(num) {
    if (validator.isNumeric(num + '', { no_symbols: true, allow_negatives: false  })) {
      return Number(num);
    }
    return false;
  }


// Module exports
// expose these functions
module.exports = {
    validateId
};