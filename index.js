// NUMBER 1

function instagramPost(handle, content, imageLink, numOfViews, numOfLikes) {
  this.handle = handle;
  this.content = content;
  this.imageLink = imageLink;
  this.numOfViews = numOfViews;
  this.numOfLikes = numOfLikes;
}

// NUMBER 2

const IGPost1 = new instagramPost(
  "hembee999",
  "Fashion",
  "https://cdn.britannica.com/68/172968-050-DB4BF52C/Tom-Ford-mix-textures-patterns-collection-Pop-art-February-2013.jpg",
  "59",
  "40"
);
const IGPost2 = new instagramPost(
  "Tony324",
  "Sports",
  "https://guardian.ng/wp-content/uploads/2016/06/Sports.jpg",
  98,
  76
);

console.log(IGPost1);
console.log(IGPost2);

// NUMBER 3

// 3a.
function createPerson(name, age, location) {
  return {
    name,
    age,
    location,
  };
}

const musa = createPerson("Musa", "19", "Lekki, Lagos state");
console.log(musa);

// 3b.
function createJambScores(eng, govt, lit, crk) {
  return {
    eng,
    govt,
    lit,
    crk,
  };
}

const musaJambScore = createJambScores("70", "85", "82", "94");

const joint = Object.assign(musa, musaJambScore);
console.log(joint);

// NUMBER 4

//  The for...in method
const food = {
  type: "raw",
  class: "carbonhydrate",
};

const newFood = {};
for (let key in food) {
  newFood[key] = food[key];
}

console.log(newFood);

// The Object.assign Method

const newFood2 = Object.assign({}, food);
console.log(newFood2);

// The spread Operator

const newFood3 = { ...food };
console.log(newFood3);

// JSON parsing

const newFood4 = JSON.parse(JSON.stringify(food));
console.log(newFood4);

// NUMBER 5

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (let property in presidentialCandidates) {
  console.log(presidentialCandidates[property] + " is the presidential candidate of " + property);
}
