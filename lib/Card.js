/** Class representing a card */
module.exports = class Card {
  /**
   * Create a card
   * @param {string} param.arcana - the arcana
   * @param {string} param.name - the name
   * @param {number} param.number - the number
   */
  constructor({ arcana, name, number }) {
    this.arcana = arcana;
    this.name = name;
    this.number = number;
  }
};
