import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
export const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ progress: {}, easy: [], medium: [], hard: [] })
  .write()
