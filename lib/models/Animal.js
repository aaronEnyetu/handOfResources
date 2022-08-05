const pool = require('../utils/pool');

class Animal {
  id;
  type;
  lifespan;
  diet;
  does_tricks;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.lifespan = row.lifespan;
    this.diet = row.diet;
    this.does_tricks = row.does_tricks;

  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM animals'
    );
    return rows.map((row) => new Animal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM animals WHERE id=$1', [id]);

    return new Animal(rows[0]);
  }

}

module.exports = Animal;
