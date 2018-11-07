const foo = 'a'
const str = 'This is ' + foo + ' String Thing'

const lit = `This is ${foo} String Thing ${foo} cool thing`

const person = 'Dan'
const age = 26

const myTag = (strings, personExp, ageExp) => {
  const str1 = strings[0]
  const str2 = strings[1]
  let ageStr = ''

  if (ageExp > 25) {
    ageStr = 'young adult'
  } else {
    ageStr = 'youngin'
  }

  return str1 + personExp + str2 + ageStr
}

const output = myTag`that ${person} is a ${age}`
