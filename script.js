//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


const list = document.createElement("ul");

var comp = function (a, b) {
  let aTitle = a.toLowerCase(),
    bTitle = b.toLowerCase();

  aTitle = removeArticles(aTitle);
  bTitle = removeArticles(bTitle);

  if (aTitle > bTitle) return 1;
  if (aTitle < bTitle) return -1;
  return 0;
};

function removeArticles(str) {
  words = str.split(" ");
  if (words.length <= 1) return str;
  if (words[0] == "a" || words[0] == "the" || words[0] == "an")
    return words.splice(1).join(" ");
  return str;
}

const arr = band.sort(comp);

for (let x of arr) {
  console.log(x);
  const t = document.createElement("li");
  t.innerHTML = x;
  list.appendChild(t);
}

document.querySelector("main").appendChild(list);

