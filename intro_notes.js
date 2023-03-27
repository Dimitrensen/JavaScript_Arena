const new_arr = new Array(10)
array_of_fruits[0] = 'strawberry'
array_of_fruits //?

const obj_dog = {
  name: 'dog',
  race: 'canine',
  age: 5,
  color: 'brown',
}
obj_dog.age = 6
obj_dog

arr.sort()
arr //?

//functions
function filter(fruit) {
  return fruit.includes('o')
}

const filter_two = (fruit) => fruit.includes('o')

const filter_three = (fruit) => {
  return fruit.includes('o')
}

arr.filter(filter_three)

// always use const except if you need to change the variable somewhere

array_of_fruits.map((fruit) => fruit.toUpperCase())

array_of_fruits.some((fruit) => fruit === 'apple')

// equality check ==
23 == '23' // true
// equality and type check ===
23 === '23' // false