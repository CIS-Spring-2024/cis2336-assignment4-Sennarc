const menuImages = {
  burrito: ["../images/burrito.jpg", "../images/bowser.jpg"],
  nuggets: ["../images/dino-nuggets.jpg", "../images/nuggets.jpg"],
  pizza: ["../images/pepperoni.png", "../images/pizza.jpg"],
  bhurji: ["../images/bhurji.jpg", "../images/egg-bhurji.jpg"],
  patty: ["../images/krabby patty gif.gif", "../images/krabby-patty-2.jpg"],
  smoke: ["../images/big smoke.jpg", "../images/smoke.jpg"],
};

function changeImage(menuItemId, direction) {
  const menuImage = document.getElementById(`${menuItemId}-image`); // Get the image element
  const currentIndex = menuImages[menuItemId].indexOf(menuImage.src); // Find index of current image

  // Calculate index of next image based on direction
  let nextIndex = currentIndex + direction;

  // Wrap around if next index is out of bounds
  if (nextIndex < 0) {
    nextIndex = menuImages[menuItemId].length - 1;
  } else if (nextIndex >= menuImages[menuItemId].length) {
    nextIndex = 0;
  }

  // Update image source with new image path
  menuImage.src = menuImages[menuItemId][nextIndex];
}
