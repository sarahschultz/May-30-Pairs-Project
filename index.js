// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(console.log);


async function fetchProducts () {
try {
    let response = await fetch('https://dummyjson.com/products');
    console.log(response);

    let translatedData = await response.json();

    let actualProductData = translatedData.products

    return actualProductData;

    } catch (error) {
        console.error(error);
    }
}

async function renderData() {
    console.log(document)
    let productsSpace = document.getElementById("products-container");
    let myProducts = await fetchProducts ();
    
    for (let i = 0; i < myProducts.length; i++) {
        let myCurrProdObj = myProducts[i];

        let newProductElement = document.createElement("p");

        newProductElement.innerText = myCurrProdObj.title;
        newProductElement.style.border = "1px solid purple";
        newProductElement.style.color = "darkslateblue";
        newProductElement.style.borderRadius = "5px";
        newProductElement.style.padding = "0.5%"
        productsSpace.appendChild(newProductElement);
    }
}

renderData();



async function fetchPosts () {
    try {
        let response = await fetch('https://dummyjson.com/posts');
        console.log(response);
    
        let translatedData = await response.json();
    
        let actualPostData = translatedData.posts
    
        return actualPostData;
    
        } catch (error) {
            console.error(error);
        }
    }
    
    async function renderPosts() {
        console.log(document)
        let postsSpace = document.getElementById("posts-container");
        let myPosts = await fetchPosts ();
        
        for (let i = 0; i < myPosts.length; i++) {
            let myCurrPostObject = myPosts[i];
            let postContainer = document.createElement("div");
            let postTitle = document.createElement("h3");
            
            postTitle.innerText = myCurrPostObject.title;
            postTitle.style.border = "1px solid purple";
            postTitle.style.borderRadius = "10px";
            postTitle.style.color = "darkslateblue";
            postTitle.style.width = "fit-content";
            postTitle.style.backgroundColor = "white";
            postTitle.style.padding = "0.5%";
            postTitle.style.fontStyle = "italic"
            postContainer.appendChild(postTitle);
              
            let postBody = document.createElement("p");
    
            postBody.innerText = myCurrPostObject.body;
            postBody.style.border = "1px solid purple";
            postBody.style.borderRadius = "10px";
            postBody.style.color = "darkslateblue";
            postBody.style.backgroundColor = "white";
            postBody.style.width = "fit-content";
            postBody.style.padding = "0.5%";
            postContainer.appendChild(postBody);
            postsSpace.appendChild(postContainer);
        }
    }
    
    renderPosts();