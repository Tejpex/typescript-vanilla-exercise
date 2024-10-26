const reverseWord: (word: string) => string = (word) => word.split('').reverse().join('')
const capitalizeWord: (word: string) => string = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
const repeatWord: (word: string, times: number) => string = (word, times) => word.repeat(times)
const countVowels: (word: string) => number = (word) => (word.match(/[aeiouyåäö]/gi) || []).length

const transformWord: (
  operation: string,
  word: string,
  param: number
) => string | number = (operation, word, param) => {
  switch (operation) {
    case "reverse":
      return reverseWord(word)
    case "capitalize":
      return capitalizeWord(word)
    case "repeat":
      return repeatWord(word, param)
    case "countVowels":
      return countVowels(word)
    default:
      return "Invalid operation"
  }
}

const runTransformation = () => {
  const word: string = (
    document.getElementById('word') as HTMLFormElement
  ).value
  const operation: string = (
    document.getElementById("operation") as HTMLFormElement
  ).value
  const param: number = parseInt(
    (document.getElementById("param") as HTMLFormElement).value
  )
  const result: string | number = transformWord(operation, word, param)
  const resultContainer = document.getElementById('result')
  if (resultContainer) resultContainer.textContent = `Result: ${result}`
  if (resultContainer) resultContainer.classList.toggle('active', result !== '')
}

// Show/hide param input based on selected operation
(document.getElementById("operation") as HTMLFormElement)!.addEventListener(
  "change",
  function () {
    const paramContainer = document.getElementById("paramContainer")
    if (paramContainer)
      paramContainer.classList.toggle("active", this.value === "repeat")
  }
)

// Event listener for transform button
document.getElementById('transformButton')!.addEventListener('click', runTransformation)
