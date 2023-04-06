migrate((db) => {
  const collection = new Collection({
    "id": "0e2xkd3qfkjsl74",
    "created": "2023-04-06 20:01:48.269Z",
    "updated": "2023-04-06 20:01:48.269Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "muknydfx",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2wdc2elm",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "swrg7c2e",
        "name": "priceInUSDC",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "pjm1eths",
        "name": "dueDate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "wmcbpt9u",
        "name": "invoice",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "1ok7xgosar0h286",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": "invoice.owner = @request.auth.id",
    "viewRule": "invoice.owner = @request.auth.id",
    "createRule": "invoice.owner = @request.auth.id",
    "updateRule": "invoice.owner = @request.auth.id",
    "deleteRule": "invoice.owner = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0e2xkd3qfkjsl74");

  return dao.deleteCollection(collection);
})
