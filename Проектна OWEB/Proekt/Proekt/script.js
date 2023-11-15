let likeCounts = {
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0,
    product6: 0,
    product7: 0,
    product8: 0,
    product9: 0,

};

function toggleLike(productId) {
    likeCounts[productId] += likeCounts[productId] === 0 ? 1 : -1;
    updateLikeCount(productId);
}

function updateLikeCount(productId) {
    const likeCountElement = document.getElementById(productId).getElementsByClassName('like-count')[0];
    likeCountElement.innerText = likeCounts[productId];
}

function submitComment(productId) {
    const commentText = document.getElementById(`comment${productId}`).value;
    if (commentText.trim() !== "") {
        const commentsContainer = document.getElementById(`comments${productId}`);
        const commentElement = document.createElement("div");
        commentElement.innerText = commentText;
        commentsContainer.appendChild(commentElement);
        document.getElementById(`comment${productId}`).value = ""; 
    }
}

function submitSurvey() {

    alert('Survey submitted successfully! Thank you for your feedback.');
}
function buyProduct(productId) {

    alert(`You bought ${productId}!`);
}
function buyProduct(productId) {
    
    var commentSection = document.querySelector('.order-form');


    if (commentSection) {
        console.log('Product number ' + productId);
        commentSection.style.display = "block"; 
    } else {
        console.error("Comment section for " + productId + " not found.");
    }
}

document.querySelectorAll('.product button').forEach(function(button) {
    button.addEventListener('click', function() {
        buyProduct(this.closest('.product').id);
    });
    buyProduct(this.closest('.product').id);
});

function youBoughtaProduct(ProductDetails){
    alert('You bought a product!');
}