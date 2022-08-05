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

  static async insert({ type, is_edible }) {
    const { rows } = await pool.query(
      `INSERT INTO fruits (type, is_edible)
      VALUES ($1, $2)
      RETURNING *`, [type, is_edible]
    );
    return new Fruit(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM fruits WHERE id = $1 RETURNING *', [id]
    );
    return new Fruit(rows[0]);
  }

  static async updateById(id, attrs) {
    const fruit = await Fruit.getById(id);
    if (!fruit) return null;
    const { type, is_edible } = { ...fruit, ...attrs };
    const { rows } = await pool.query(
      `UPDATE fruits
      SET type=$2, is_edible=$3
      WHERE id=$1 RETURNING *`, [id, type, is_edible]
    );
    return new Fruit(rows[0]);
  }



}

module.exports = Fruit;
