const sqlite = require("sqlite3").verbose()

class DBAgent {
    static db = new sqlite.Database("ifdb.db")

    static __serchByQuery = "SELECT * FROM Film WHERE Name LIKE '%?%'"
    static __paginateMethod = "SELECT * FROM Film LIMIT ?, ?"
    static __getByIdMethod = "SELECT * FROM Film WHERE id = ?"
    static __getAllMethod = "SELECT * from Film"

    static formatSearchMethodStr(str) {
        return `SELECT * FROM Film WHERE Name LIKE '%${str}%'`
    }
}

module.exports = DBAgent