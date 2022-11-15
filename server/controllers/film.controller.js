const DBAgent = require("../utils/db")
const sqlite = require("sqlite3")

class FileController {

    paginate(req, res) {
        const {offset, limit} = req.query
        DBAgent.db.all(DBAgent.__paginateMethod, [offset, limit], (err, rows) => {
            console.log(rows)
            return res.json(rows)
        })
    }
    
    getById(req, res) {
        const {id} = req.params
        DBAgent.db.get(DBAgent.__getByIdMethod, [id], (err, row) => {
            return res.json(row)
        })
    }

    getAll(req, res) {
        DBAgent.db.all(DBAgent.__getAllMethod, [], (err, rows) => {
            return res.json({message: rows})
        })
    }

    search(req, res) {
        const {query} = req.query
        DBAgent.db.all(DBAgent.formatSearchMethodStr(query), [], (err, rows) => {
            return res.json(rows)
        })
    }
}

module.exports = new FileController()