migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf5op14f5w10n6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "isxv8qzs",
    "name": "address",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xjwuqz1n",
    "name": "phone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chlcgbta",
    "name": "website",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dn37vqhe",
    "name": "username",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf5op14f5w10n6")

  // remove
  collection.schema.removeField("isxv8qzs")

  // remove
  collection.schema.removeField("xjwuqz1n")

  // remove
  collection.schema.removeField("chlcgbta")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dn37vqhe",
    "name": "username",
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
})
