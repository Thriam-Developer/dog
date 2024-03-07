let clrBtn = document.getElementsByClassName("clrBtn");
let shapeClr = document.getElementById('shape-clr');

clrBtn[0].addEventListener("click", function() {
	shapeClr.src = "https://img.freepik.com/free-photo/cute-shepherd-dog-posing-isolated-white-background_155003-46179.jpg?w=740&t=st=1709362198~exp=1709362798~hmac=5a515fcbfec5e986f74a2af1cb39aad11aa21bc4a40476280f444769a82a8bc8";
});
clrBtn[1].addEventListener("click", function() {
	shapeClr.src = "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1709362170~exp=1709365770~hmac=5ee9484885132c10c9110bf1c2c813528aa20caa7488c389715a1fc5952be148&w=740";
});
clrBtn[2].addEventListener("click", function() {
	shapeClr.src = "https://img.freepik.com/free-photo/selective-focus-shot-adorable-golden-retriever-outdoors_181624-45215.jpg?t=st=1709296198~exp=1709299798~hmac=7d2ab04da69432ead71a6bcad94e458eca7d109e1c107e102689a92b456e4eeb&w=740";
});
clrBtn[3].addEventListener("click", function() {
	shapeClr.src = "https://img.freepik.com/free-photo/beagle-tricolor-puppy-is-posing-cute-white-braun-black-doggy-pet-is-playing-red-background-looks-attented-playful-studio-photoshot-concept-motion-movement-action-negative-space_155003-33948.jpg?t=st=1709296314~exp=1709299914~hmac=702b93c9cb8f3c1e70289de0ce3a93c0b521e8b926df00218f396e8e018112ff&w=740";
});

document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('exampleModal').style.display = 'none';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});