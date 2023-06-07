// entire backend object should look like :

// id should be an id type

interface Ipeople {
  firstname: String
  lastname: String
  gender: String
  height: Number
  hairColor: String
  weight: Number
  skinColor: String
  ethnicity: String
  language: String
  city: 'Bruxelles' | 'Antwerp' | 'Ghent' | 'Ostend'
  adress: String
  phoneNumber: Number
  email: String
  pictures: String[]
  shoesize: Number
  waistSize: Number
  age: Number
}
;[]

export const people: Ipeople[] = [
  {
    firstname: 'John',
    lastname: 'Turbodork',
    gender: 'Male',
    height: 12,
    hairColor: 'Brown',
    weight: 123,
    skinColor: 'Brown',
    ethnicity: 'Brown',
    language: 'Brown',
    city: 'Bruxelles',
    adress: 'adress butt',
    phoneNumber: 123,
    email: 'emailadress',
    pictures: ['ass', 'butt', 'face'],
    shoesize: 123,
    waistSize: 123,
    age: 123,
  },
]

// then what you pass in is, this is only gonna exist on the backend though
// const addPeople = new People({
//   firstname: 'Bobby',
//   lastname: 'Richardson',
//   gender: 'Male',
//   height: 140,
//   hairColor: 'Brown',
//   weight: 80,
//   skinColor: 'Brown',
// })
