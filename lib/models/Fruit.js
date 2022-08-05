const pool = require('../utils/pool');

class Fruit {
  id;
  type;
  is_edible;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.is_edible = row.is_edible;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM fruits'
    );
    return rows.map((row) => new Fruit(row));
  }

}

module.exports = Fruit;
