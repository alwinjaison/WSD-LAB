// const blogPost = {
//   title: "Nature",
//   body: "Nature is the thing that provides the best resources for free of cost",
//   userId: 6,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(blogPost),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// for (let index = 1; index <= 100; index++) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// for (let index = 1; index <= 5; index++) {
//   fetch(`https://meowfacts.herokuapp.com/`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

getPost();
