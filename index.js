console.log("connectd")
const myAuthor = document.querySelector(".author")
const myQutation = document.querySelector(".qutation")
const MyButton = document.querySelector(".generator")

MyButton.addEventListener("click",function() {
    generateQutation()
})

async function generateQutation() {
    const output = await fetch ("https://api.quotable.io/random")
console.log(output)
const result =await output.json()
console.log(result)
console.log(result.author)
console.log(result.content)
myAuthor.textContent = result.author
myQutation.textContent = result.content

}
generateQutation()

