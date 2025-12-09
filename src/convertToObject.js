'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const string = sourceString.split(';');
  const result = {};

  for (const line of string) {
    if (!line.includes(':')) {
      continue;
    }

    const temp = line.split(':');

    result[temp[0].trim()] = temp[1].trim();
  }

  return result;
}

module.exports = convertToObject;
