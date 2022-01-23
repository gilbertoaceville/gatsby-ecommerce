self.addEventListener("push", () => {
  self.registration.showNotification("Item added to cart", {})
})
