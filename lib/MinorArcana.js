const Card = require('./Card');

/**
 * Class representing a minor arcana card
 * @extends Card
 */
module.exports = class MinorArcana extends Card {
  /**
   * Create a minor arcana card
   * @param {string} param.name - the name
   * @param {number} param.number - the number
   * @param {string} param.suit - the suit
   */
  constructor({ name, number, suit }) {
    super({ arcana: 'minor', name, number });
    this.suit = suit;
  }
};
