// npm i pg

import { Pool } from 'pg';

const db = new Pool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs',
    port: 5432,
    max: 10, // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
});


// Select
async function getMembers() {
    try {
        const result = await pool.query('SELECT * FROM members');
        console.log(result.rows);
    } catch (err) {
        console.error(err);
    }
}

// Insert
async function insertMember(first_name, last_name) {
    try {
        const result = await pool.query('INSERT INTO members (first_name, last_name) VALUES ($1, $2) RETURNING *', [first_name, last_name]);
        console.log(`Inserted member with ID: ${result.rows[0].id}`);
    } catch (err) {
        console.error(err);
    }
}

// Update
async function updateMember(id, first_name) {
    try {
        const result = await pool.query('UPDATE members SET first_name = $1 WHERE id = $2', [first_name, id]);
        console.log(`Updated ${result.rowCount} member(s)`);
    } catch (err) {
        console.error(err);
    }
}

// Delete
async function deleteMember(id) {
    try {
        const result = await pool.query('DELETE FROM members WHERE id = $1', [id]);
        console.log(`Deleted ${result.rowCount} member(s)`);
    } catch (err) {
        console.error(err);
    }
}

async function main() {
    await getMembers();
    await insertMember('John Doe', 'john.doe@example.com');
    await updateMember(1, 'Jane Doe', 'jane.doe@example.com');
    await deleteMember(2);
}

main();