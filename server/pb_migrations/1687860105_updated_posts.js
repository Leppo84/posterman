migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hfznb1g6xie0orn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0odgnzpn",
    "name": "userId",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hfznb1g6xie0orn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0odgnzpn",
    "name": "userId",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
