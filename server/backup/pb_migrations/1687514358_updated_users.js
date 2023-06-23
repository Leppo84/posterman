migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf5op14f5w10n6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qizbkmxl",
    "name": "company",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf5op14f5w10n6")

  // remove
  collection.schema.removeField("qizbkmxl")

  return dao.saveCollection(collection)
})
