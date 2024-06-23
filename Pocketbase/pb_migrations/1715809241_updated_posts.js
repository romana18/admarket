/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb7au8mnf1jfr6y")

  // remove
  collection.schema.removeField("szmim9l2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prpe3sxf",
    "name": "shelf_life",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb7au8mnf1jfr6y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szmim9l2",
    "name": "shelf_life",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("prpe3sxf")

  return dao.saveCollection(collection)
})
