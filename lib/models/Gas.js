const pool = require('../utils/pool');

class Gas {
  id;
  name;
  appearance;
  atomic_number;  
  flammable;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.appearance = row.appearance;
    this.atomic_number = row.atomic_number;
    this.flammable = row.flammable;
    

  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM gasses'
    );
    return rows.map((row) => new Gas(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM gasses WHERE id=$1', [id]);

    return new Gas(rows[0]);
  }



}

module.exports = Gas;

