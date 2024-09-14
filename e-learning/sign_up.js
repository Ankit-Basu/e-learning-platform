// document.addEventListener("DOMContentLoaded", function () {
//     const signUpForm = document.querySelector("form");

//     signUpForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         // Get user input
//         const name = signUpForm.querySelector('input[placeholder="Name"]').value;
//         const course = signUpForm.querySelector('select').value;
//         const contact = signUpForm.querySelector('input[placeholder="Phone Number"]').value;
//         const email = signUpForm.querySelector('input[placeholder="Email"]').value;
//         const address = signUpForm.querySelector('input[placeholder="Address"]').value;

//         // Store user information in local storage
//         const userInfo = {
//             name: name,
//             course: course,
//             contact: contact,
//             email: email,
//             address: address,
//         };

//         localStorage.setItem("userInfo", JSON.stringify(userInfo));

//         // Redirect to the dashboard
//         window.location.href = "dashboard.html";
//     });
// });
