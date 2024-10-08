// // fetch the data 
// const loadCategories = () => {
//     fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
//     .then((res) => res.json())
//     .then((data) => displayCategories(data.categories))
//     .catch((error) => console.log(error))
// }

// // create display categories 
// const displayCategories = (categories) => {
//      const  categoryContainer = document.getElementById('categories');
     
//     categories.forEach((item) => {
//         console.log(item);

//         // create a button 
//         const button = document.createElement('button');
//         button.classList ='btn';
//         button.innerText = item.category;
//         // button.innerText = item.
//         // category_icon
//         ;

//         // add button to category container 
//         categoryContainer.append(button)
    


//     });

// }


// loadCategories()


// Fetch the data 
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// Create and display categories 
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    
    categories.forEach((item) => {
        // Create a button 
        const button = document.createElement('button');
        button.classList = 'btn flex items-center p-2 font-bold py-2 px-9 rounded';

        // Create an image element 
        const img = document.createElement('img');
        img.src = item.category_icon; 
        img.alt = item.category; 
        img.classList = 'w-7 h-7 rounded-full';

        // Add  category name  
        const text = document.createElement('item');
        text.innerText = item.category;

        // Append image and text to  button 
        button.appendChild(img);
        button.appendChild(text);

        // Add the button to category container 
        categoryContainer.append(button);
    });
};

loadCategories();

// start card section 

const loadAllPets = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => displayPetCard(data.pets))
    .catch((error) => console.log(error));
};

// display pet card 
const displayPetCard = (pets) => {
  const petContainer = document.getElementById('pets')
    pets.forEach(pet => {
        console.log(pet)
        const card = document.createElement('div');
        card.classList='card card-compact'
        card.innerHTML= ` <figure>
    <img
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>`
  petContainer.append(card)
    })
}



loadAllPets()


