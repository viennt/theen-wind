const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('functions/db.json')
const db = low(adapter)

exports.handler = async (event, context) => {
  const result = db.get('categories').value()

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: result
    })
  }
}
