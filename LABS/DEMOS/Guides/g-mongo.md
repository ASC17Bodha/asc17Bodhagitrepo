use sakila
switched to db sakila
db.createCollection("actors")
{ ok: 1 }
db.createCollection("actors-del",{capped:true,size:5242880,max:50})
{ ok: 1 }
db.actors.drop();
true
db.createCollection("actors")
{ ok: 1 }
db.actors.insertMany([{}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67515ce0da7aa5a6f99d3adb')
  }
}
db.actors.insertMany([{
first_name:'John',
last_name:'Doe'},
                      {
first_name:'Penelope',
last_name:'Guiness',
last_update:2024-12-05T07:59:12.517Z}])
SyntaxError: Identifier directly after number. (7:22)

  5 | first_name:'Penelope',
  6 | last_name:'Guiness',
> 7 | last_update:2024-12-05T07:59:12.517Z}])
    |                       ^
db.actors.insertMany([{
first_name:'John',
last_name:'Doe'},
                      {
first_name:'Penelope',
last_name:'Guiness',
last_update:2024-12-05}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67515e3ada7aa5a6f99d3adc'),
    '1': ObjectId('67515e3ada7aa5a6f99d3add')
  }
}
db.actors.find({first_name:"Penelope"})
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness',
  last_update: 2007
}
db.actors.find().sort({last_name:-1})
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness',
  last_update: 2007
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3adc'),
  first_name: 'John',
  last_name: 'Doe'
}
{
  _id: ObjectId('67515ce0da7aa5a6f99d3adb')
}
db.actors.find({},{first_name:1,last_name:1})
{
  _id: ObjectId('67515ce0da7aa5a6f99d3adb')
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3adc'),
  first_name: 'John',
  last_name: 'Doe'
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness'
}
db.actors.find({},{first_name:1,last_name:1,_id:0})
{}
{
  first_name: 'John',
  last_name: 'Doe'
}
{
  first_name: 'Penelope',
  last_name: 'Guiness'
}
db.actors.updateOne(
  {first_name:"John"},
  {$set:{last_name:"Smith"}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.actors.find()
{
  _id: ObjectId('67515ce0da7aa5a6f99d3adb')
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3adc'),
  first_name: 'John',
  last_name: 'Smith'
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness',
  last_update: 2007
}
db.actors.updateMany(
  {},
  {$set:{last_update:new date)()}})
SyntaxError: Unexpected token, expected "," (3:29)

  1 | db.actors.updateMany(
  2 |   {},
> 3 |   {$set:{last_update:new date)()}})
    |                              ^
db.actors.updateMany(
  {},
  {$set:{last_update:new date}})
ReferenceError: date is not defined
db.actors.updateMany(
  {},
  {$set:{last_update:new date()}})
ReferenceError: date is not defined
db.actors.updateMany(
  {},
  {$set:{last_update:new Date()}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
db.actors.find()
{
  _id: ObjectId('67515ce0da7aa5a6f99d3adb'),
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3adc'),
  first_name: 'John',
  last_name: 'Smith',
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness',
  last_update: 2024-12-05T08:17:14.681Z
}
db.actors.insertOne({})
{
  acknowledged: true,
  insertedId: ObjectId('67516209da7aa5a6f99d3ade')
}
db.actors.insertOne({
first_name:'Jane',
last_name:"Doe"})
{
  acknowledged: true,
  insertedId: ObjectId('67516230da7aa5a6f99d3adf')
}
db.actors.find()
{
  _id: ObjectId('67515ce0da7aa5a6f99d3adb'),
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3adc'),
  first_name: 'John',
  last_name: 'Smith',
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness',
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67516209da7aa5a6f99d3ade')
}
{
  _id: ObjectId('67516230da7aa5a6f99d3adf'),
  first_name: 'Jane',
  last_name: 'Doe'
}
db.actors.insertOne({
first_name:'John',
last_name:"Doe"})
{
  acknowledged: true,
  insertedId: ObjectId('67516246da7aa5a6f99d3ae0')
}
db.actors.deleteMany({last_name="Doe"})
SyntaxError: Invalid shorthand property initializer. (1:31)

> 1 | db.actors.deleteMany({last_name="Doe"})
    |                                ^
db.actors.deleteMany({last_name:"Doe"})
{
  acknowledged: true,
  deletedCount: 2
}
db.actors.find()
{
  _id: ObjectId('67515ce0da7aa5a6f99d3adb'),
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3adc'),
  first_name: 'John',
  last_name: 'Smith',
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67515e3ada7aa5a6f99d3add'),
  first_name: 'Penelope',
  last_name: 'Guiness',
  last_update: 2024-12-05T08:17:14.681Z
}
{
  _id: ObjectId('67516209da7aa5a6f99d3ade')
}
sakila

