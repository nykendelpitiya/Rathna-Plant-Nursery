const qtyInputs = document.querySelectorAll(".qty");
const totalPriceSpan = document.getElementById("totalPrice");

qtyInputs.forEach(input => {
  input.addEventListener("input", () => {
    calculateTotal();
  });
});

function calculateTotal() {
  let total = 0;
  qtyInputs.forEach(qty => {
    const price = parseFloat(qty.dataset.price);
    const amount = parseInt(qty.value) || 0;
    total += price * amount;
  });
  totalPriceSpan.textContent = total;
}

function placeOrder() {
  const total = totalPriceSpan.textContent;
  if (parseInt(total) > 0) {
    alert("Your order has been placed! Total: Rs. " + total);
  } else {
    alert("Please select at least one plant to order.");
  }
}