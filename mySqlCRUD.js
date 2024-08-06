// npm i mysql, mysql2

import mysql from 'mysql2/promise'; 
// If you are using Node.js with ES modules (e.g., your file has a .mjs extension or you have "type": "module" in your package.json), 
// you cannot use require directly. Instead, you need to use import.

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
    waitForConnections: true,
    connectionLimit: 10
});

async function getMembers() {
    try {
        const [result] = await db.query('SELECT * FROM members');
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

async function insertMember(name, surname) {
    try {
        const [result] = await db.query('INSERT INTO members (first_name, last_name) VALUES (?, ?)', [name, surname]);
        console.log(`Inserted member with ID: ${result.insertId}`);
    } catch (err) {
        console.error(err);
    }
}

async function updateMember(id, name, email) {
    try {
        const [result] = await db.query('UPDATE members SET first_name = ? WHERE id = ?', [name, id]);
        console.log(`Updated ${result.affectedRows} member(s)`);
    } catch (err) {
        console.error(err);
    }
}

async function deleteMember(id) {
    try {
        const [result] = await db.query('DELETE FROM members WHERE id = ?', [id]);
        console.log(`Deleted ${result.affectedRows} member(s)`);
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