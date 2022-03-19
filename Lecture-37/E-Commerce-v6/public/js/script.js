const productContainer = document.querySelector('.products');



productContainer.addEventListener('click', async(e) => {
    if (e.target.nodeName === "I") {
        const id = e.target.getAttribute('product-id');
        const res = await axios.post(`/user/${id}/like`);
        console.log(res);
    }
});

