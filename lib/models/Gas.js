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

  static async insert({ name, appearance, atomic_number, flammable }) {
    const { rows } = await pool.query(
      'INSERT INTO gasses (name, appearance, atomic_number, flammable) VALUES ($1, $2, $3, $4) RETURNING *', [name, appearance, atomic_number, flammable]
    );
    return new Gas(rows[0]);
  }


  static async updateById(id, attrs) {
    const updateGas = await Gas.getById(id);
    if (!updateGas) return null;
    const { name, appearance, atomic_number, flammable } = { ...updateGas, ...attrs };
    const { rows } = await pool.query(
      `
      UPDATE gasses
      SET name=$2, appearance=$3, atomic_number=$4, flammable=$5
      WHERE id=$1 RETURNING *`,
      [id, name, appearance, atomic_number, flammable]
    );
    return new Gas(rows[0]);
  }


  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM gasses WHERE id = $1 RETURNING *',
      [id]
    );
    return new Gas(rows[0]);
  }






}

module.exports = Gas;

