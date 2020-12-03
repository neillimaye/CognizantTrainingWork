enum Gender{
  MALE, FEMALE
}
class Person{
  name:string
  gender:Gender
}

let person = new Person();
person.name = "Nag"
person.gender = Gender.FEMALE
