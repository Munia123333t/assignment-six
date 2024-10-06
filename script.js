
// fetch the data 
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

// create display categories 
const displayCategories = (categories) => {
     const  categoryContainer = document.getElementById('categories');
     
    categories.forEach((item) => {
        console.log(item);

        // create a button 
        const button = document.createElement('button');
        button.classList ='btn';
        button.innerText = item.category;
        // button.innerText = item.
        // category_icon
        ;

        // add button to category container 
        categoryContainer.append(button)
    


    });

}


loadCategories()


