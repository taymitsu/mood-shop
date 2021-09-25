function replace_text() {
  const h1 = document.querySelector('h1') // Selects the h1 tag
  
  const text_input = document.querySelector('#new_text')
  let text_str = text_input.value
  console.log(text_str)

  h1.innerHTML = text_str
}
