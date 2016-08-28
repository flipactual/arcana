const MinorArcana = require('./MinorArcana');
const MajorArcana = require('./MajorArcana');

const riderWaite = require('../decks/rider-waite');

/**
 * @module deck
 */

/** Class representing a deck */
module.exports = class Deck {
  /**
   * Create a deck
   * @param {Object} [deck] - the deck description
   * @param {Object} deck.majorArcana - the major arcana description
   * @param {string[]} deck.majorArcana.symbols - the major arcana symbols
   * @param {Object} deck.minorArcana - the minor arcana description
   * @param {string[]} deck.majorArcana.suits - the minor arcana suits
   * @param {string[]} deck.majorArcana.orders - the minor arcana orders
   */
  constructor(deck) {
    this.deck = deck || riderWaite;
    this.minorArcana = [].concat(...this.deck.minorArcana.suits.map(suit =>
      this.deck.minorArcana.orders.map((name, number) => new MinorArcana({
        name,
        number: number + 1,
        suit,
      }))
    ));
    this.majorArcana = this.deck.majorArcana.symbols
      .map((name, number) => new MajorArcana({ name, number }));
  }
};