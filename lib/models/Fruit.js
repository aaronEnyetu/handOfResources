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

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM fruits WHERE id=$1', [id]);
    return new Fruit(rows[0]);
  }


}

module.exports = Fruit;
