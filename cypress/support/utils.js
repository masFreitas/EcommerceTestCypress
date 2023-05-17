const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');

const getRandomName = () => {
    var customConfig = {
        dictionaries: [adjectives, animals],
        separator: ' ',
        length: 2,
        style: 'capital'
      }

      return uniqueNamesGenerator(customConfig);
}

const getRandomEmail = () => {
    var customConfig = {
        dictionaries: [adjectives, animals],
        separator: '@',
        length: 2,
        style: 'lowerCase'
      }
  
      var randomEmail = uniqueNamesGenerator(customConfig) + '.com'
      return randomEmail;
  }

exports.getRandomName = getRandomName
exports.getRandomEmail = getRandomEmail
