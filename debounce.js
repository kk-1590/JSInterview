const input = document.getElementById('input');

input.addEventListener('input',async (e) => {

    const response = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)

    const data = await response.json();

    console.log(data.products);

    console.log('event',e.target.value);
})