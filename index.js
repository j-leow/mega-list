const dinoList = document.querySelector('#dinoList')

//Function to render list item
function renderListItem(value) {
  const li = document.createElement('li')
  li.innerHTML = `${value}`
  return li
}

//Function to create a favorite button
function makeFavButton() {
  //const favBtn = document.createElement('button')
  const span = document.createElement('span')
  const innerText = document.createTextNode('\u2661')
  span.className = "favorite"
  span.appendChild(innerText)
  span.value = false
  span.addEventListener('click', handleFavorite)

  return span
}

function makeDelButton() {
  const span = document.createElement('span')
  const innerText = document.createTextNode('\u00d7')
  span.className = "delete"
  span.appendChild(innerText)
  span.value = false
  span.addEventListener('click', handleDelete)
  span.id = 'list'

  return span
}

//Function to handle the clicking of the favorite button
function handleFavorite(ev) {
  ev.preventDefault()
  const favorite = ev.target

  //If button is pushed, change color of button. Else, change back to the original color.
  if (favorite.value === false) {
    favorite.style.backgroundColor = '#ff000c'
    favorite.style.borderColor = "#ff000c"
    favorite.style.color = '#ffdd02'
    favorite.value = true
  }

  else if (favorite.value === true) {
    favorite.style.backgroundColor = null
    favorite.style.borderColor = null
    favorite.style.color = null
    favorite.value = false
  }
}

//Function to handle the clicking of the delete button
function handleDelete(ev) {
  ev.preventDefault()
  const delBtn = ev.target
  const remElement = document.getElementById(delBtn.id)
  remElement.remove()
}

//Function to create a list - append the names of animals into this list.
function renderList(animalData) {
    const list = document.createElement('ul')
    Object.keys(animalData).map(function(fieldName) {
        const li = renderListItem(animalData[fieldName])
        li.id = 'list'
        list.appendChild(li)
        const favBtn = makeFavButton()
        li.appendChild(favBtn)

        const delBtn = makeDelButton()
        li.appendChild(delBtn)
    })

    return list
  }

//Function to handle events
function handleEvent(ev) {
    ev.preventDefault()
    const f = ev.target //Remember that f is the event
    const name = dinoList.animalName.value

    const animal = {
      name: dinoList.animalName.value,
    }

    if (f.id === 'append') {
      details.appendChild(renderList(animal))
    }

    else if (f.id === 'prepend') {
      details.prepend(renderList(animal)) //Note that this is the jquery way
    //  list.insertBefore(renderList(animal), list.firstChild)
    }
  }

dinoList.addEventListener('click', handleEvent)
//dinoList.addEventListener('submit', handleSubmit)


// //This isn't working - I tried to create a prependChild function but the console kept throwing an error saying that this function doesn't exist.
// function prependChild(parent, newChild) {
//   parent.insertBefore(newChild, parent.firstChild);
// }
//
// function prependList(animalData) {
//   const li = renderList(animalData)
//   const list = prependChild(li, li.childNodes[0])
//   return list
// }
