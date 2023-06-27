migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hfznb1g6xie0orn")

  // remove
  collection.schema.removeField("0odgnzpn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gxbotrwx",
    "name": "userId",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hfznb1g6xie0orn")

  // add
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

  // remove
  collection.schema.removeField("gxbotrwx")

  return dao.saveCollection(collection)
})
