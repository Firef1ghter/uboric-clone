document.querySelector(".searchbar").addEventListener("click", showsearch);

function showsearch(){
    document.querySelector("form").style.display = "block";
}

// navbar hide search dropdown Option

document.querySelector(".hidebar").addEventListener("click", closesearch);

function closesearch(){
    document.querySelector("#searchform").style.display = "none";
}

// navbar search SUBMIT button function

document.querySelector("form").addEventListener("submit", showproduct);

function showproduct(event){
    event.preventDefault();
    var searchInput = document.querySelector(".typeany").value;
    if(searchInput == "ALL FRUITS"){
        window.location.href = "ProductPage.html";
    }
}


// function for go to home page.

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
  window.location.href = "index.html";
})

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
  window.location.href = "SignIn.html";
})

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
  window.location.href = "cart.html";
})

// function for adding product data on page

var data = [
    {
      
      name: " Grapefruit (Pack of 2 & 4 pcs)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-cover_360x.jpg?v=1639461484",
      price: "₹ 144 – ₹ 269",
      cart:"Add to Cart"
     
     
    },
    {
      
      name: " Guava (Pack of 3 & 6)" ,
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Copy_of_ThaiGuava_Isolated.png?v=1639203167",
      price: "₹ 60 – ₹ 109",
      cart:"Add to Cart"
    },
    {
      
      name: " Avocado Imported (1pc ≈ 250g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado.progressive.jpg?v=1622045722",
      price: "₹ 339",
      cart:"Add to Cart"
    },
    {
      
      name: " Imported Oranges (Pack of 3 & 6)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309.png?v=1611811512",
      price: "₹ 140",
      cart:"Add to Cart"

    },
    {
    
      name: " Nagpuri Santra (2 pc & 4 pc )",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Nagpuri-santra-cover_dfe991ef-cd37-45a4-94f7-b3225779ab6f_360x.jpg?v=1634627098",
      price: "₹ 59 – ₹ 112",
      cart:"Add to Cart"
    },
    {
    
      name: " Plum (5-6 pcs ≈ 450 g to 500 g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Picture3_360x.jpg?v=1636633326",
      price: "₹ 219",
      cart:"Add to Cart"
    },
    {
    
      name: " Strawberries (Pack of 200 g & 400 g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/c54118d4-fe2a-4805-aa25-777c029932ee_360x.png?v=1614327346",
      price: "₹ 249 – ₹ 479",
      cart:"Add to Cart"
    },
    {
    
      name: " Berry Combo",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/5c874170-4b51-4c5c-839d-57f4177e3034-min_360x.png?v=1614324976",
      price: "₹ 577 – ₹ 795",
      cart:"Add to Cart"
    },
    {
    
      name: " Avocado Imported (1pc ≈ 250g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado_360x.jpg?v=1622045722",
      price: "₹ 339",
      cart:"Add to Cart"
    },
    {
    
      name: " Muskmelon (1 pc)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Muskmelon-cover_360x.jpg?v=1633763200",
      price: "₹ 99",
      cart:"Add to Cart"
    },
    {
    
      name: " Dragon Fruit (1 pc)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dragon-fruit--white-cover_360x.jpg?v=1632470660",
      price: "₹ 127",
      cart:"Add to Cart"
    },
    {
    
      name: " Washington Apples (Pack of 2 & 4)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/d109e625-23d6-49b2-ad4f-433ac292cece_360x.png?v=1613364161",
      price: "₹ 154 – ₹ 297",
      cart:"Add to Cart"
    },

    {
    
      name: " Blueberries (125g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/5e8b2ee6-ce8e-42e9-959f-d43c544f586a_360x.png?v=1616326949",
      price: "₹ 358",
      cart:"Add to Cart"
    },
    {
    
      name: " Kinnaur Apples (Pack of 3 & 6)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kinnaur-Apples-cover_360x.jpg?v=1634226790",
      price: "₹ 125 – ₹ 239",
      cart:"Add to Cart"
    },
    {
    
      name: "Golden Kiwis (3 pcs ≈ 300 g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/golden-kiwi-cover_360x.jpg?v=1625147312",
      price: "₹ 249",
      cart:"Add to Cart"
    },
    {
    
      name: "Mini Oranges (6 pcs) ",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mini-Oranges-cover_360x.jpg?v=1631890350",
      price: "₹ 163",
      cart:"Add to Cart"
    },

    {
    
      name: "Red Globe Imported (400g)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_360x.png?v=1614765886",
      price: "₹ 220",
      cart:"Add to Cart"
    },
    {
    
      name: " Thai Guava (1 pc ≈ 0.4-0.5 kg)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofGuava_Main_Clean_360x.png?v=1606828311",
      price: "₹ 63",
      cart:"Add to Cart",
    },
    {
    
      name: "Bananas Yelakki (Pack of 250g, 500g & 1kg )",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Yelakki-banana-cover_bc79dea2-08f8-404b-99f5-327a91213fbb_360x.jpg?v=1627026370",
      price: "₹ 35 – ₹ 113",
      cart:"Add to Cart"
    },
    {
    
      name: " Papaya (1 pc )",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Papaya-cover_360x.jpg?v=1638875170",
      price: "₹ 69",
      cart:"Add to Cart"

    },
    {
    
      name: " Mosambi (Pack of 3 & 6)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/CopyofMosambi_Main_FixedShadows-min_360x.png?v=1614327057",
      price: "₹ 55 – ₹ 99",
      cart:"Add to Cart"
    },
    {
    
      name: "Fruit Box  (Cherish)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_360x.jpg?v=1631350656",
      price: "₹ 1400",
      cart:"Add to Cart"
    },
    {
    
      name: "Fruit Box(Adore)",
      image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7807_360x.jpg?v=1631347621",
      price: "₹ 2400",
      cart:"Add to Cart"
    },

  ];

  

    var cartarray = JSON.parse(localStorage.getItem("cartData")) || [];
  
  data.map(function(elem,index){
    var firstDiv=document.createElement("div");
    firstDiv.setAttribute("class","main")

    var img=document.createElement("img");
    img.setAttribute("class","img")
    img.setAttribute("src",elem.image);
    var h4=document.createElement("p");
    h4.setAttribute("class","nameoff")
    h4.textContent=elem.name;
    var para=document.createElement("p");
    
    para.setAttribute("class","prc")
    para.textContent=elem.price;

    var card=document.createElement("button");
    card.setAttribute("class","cart")
    card.textContent=elem.cart;

    card.addEventListener("click", function(){
        cartarray.push(data[index]);
        localStorage.setItem("cartData", JSON.stringify(cartarray));
    })
   
    firstDiv.append(img,h4,para,card);
    document.getElementById("contner").append(firstDiv);
});

// function for go to cart page

document.querySelector(".img").addEventListener("click", function(){
  window.location.href = "ProductDetailPage.html";
})

