const input = document.querySelector('input')

const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')



function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1, str.length)
}
function CamelCase(str) {
    const lowercaseString = str.toLowerCase()
    const wordsArray  = lowercaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) {
            return word
        }
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function pascalcase(str) {
    const lowercaseString = str.toLowerCase()
    const wordsArray  = lowercaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function snakeCase(str) {
    const wordsArray = str.split(' ')
    return wordsArray.join('_')
}

function kebabCase(str) {
    const wordsArray = str.split(' ')
    return wordsArray.join('-')
}

function trim(str) {
   return str.replaceAll(' ', '')
}

function updateScreen() {
    lowerCaseOutput.innerText = input.value.toLowerCase()
    upperCaseOutput.innerText = input.value.toUpperCase()
    camelCaseOutput.innerText = CamelCase(input.value)
    pascalCaseOutput.innerText = pascalcase(input.value)
    snakeCaseOutput.innerText = snakeCase(input.value)
    kebabCaseOutput.innerText = kebabCase(input.value)
    trimOutput.innerText = trim(input.value)
}

updateScreen()


input.addEventListener('input', updateScreen);