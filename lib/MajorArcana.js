const Card = require('./Card');

/**
 * Class representing a major arcana card
 * @extends Card
 */
module.exports = class MajorArcana extends Card {
  /**
   * Create a major arcana card
   * @param {string} param.name - the name
   * @param {number} param.number - the number
   */
  constructor({ name, number }) {
    super({ arcana: 'major', name, number });
  }
};
