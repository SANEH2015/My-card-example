//This component create a new book

function Addbook({book}){
 let mybooks = JSON.parse(localStorage.getItem("booktable"))
console.log("this is what is in book",book)
console.log("this is what is in mybooks",mybooks)
mybooks.push(book) //sending mybooks to book
console.log("new book",mybooks)
localStorage.setItem('booktable',JSON.stringify(mybooks)) //note when you are putting data back the key changed to the variable created above
}
export default Addbook