const Employee = require(`../lib/Employee.js`)
const Manager = require('../lib/Manager.js')
const Intern = require('../lib/Intern.js')
const Engineer = require('../lib/Engineer.js');

// function createCards() {
//     staff.forEach(employee => {
//         console.log(`About to createCards, this staff member is a ${employee.getRole()}`)
//    })   
// }

function createHTML(staff) {
    
    console.log('In createHTML');
        
    staff.forEach(employee => {
        console.log(`About to createCards, this staff member is a ${employee.getRole()}`)
    })  

 
 return `<!DOCTYPE html>
 <html lang="en">
 
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <title>Team Profile</title>
 </head>
 
 <body>
 
     <!-- Header -->
     <header class="container-fluid bg-danger mb-3 p-2">
         <h1 class="display-5 text-white text-center">My Team</h1>
     </header>

     <div>
    
     
     </div>
 
     <!-- Main -->
     <main class = "container">
         <div class = "row d-flex justify-content-center">
 
             <div class="card m-3" style="width: 15rem;">
                 <div class="card-header bg-primary text-white">
                     <h4>Name</h4>
                     <h5>Role</h5>
                 </div>
                 <div class="card-body" style="background-color:#D9D9D9;">
                     <ul class="list-group">
                         <li class="list-group-item">ID: </li>
                         <li class="list-group-item">Email: </li>
                         <li class="list-group-item">OTHER: </li>
                     </ul>
                 </div>
             </div>
 
             <div class="card m-3" style="width: 15rem;">
                 <div class="card-header bg-primary text-white">
                     <h4>Name</h4>
                     <h5>Role</h5>
                 </div>
                 <div class="card-body" style="background-color:#D9D9D9;">
                     <ul class="list-group">
                         <li class="list-group-item">ID: </li>
                         <li class="list-group-item">Email: </li>
                         <li class="list-group-item">OTHER: </li>
                     </ul>
                 </div>
             </div>
 
             <div class="card m-3" style="width: 15rem;">
                 <div class="card-header bg-primary text-white">
                     <h4>Name</h4>
                     <h5>Role</h5>
                 </div>
                 <div class="card-body" style="background-color:#D9D9D9;">
                     <ul class="list-group">
                         <li class="list-group-item">ID: </li>
                         <li class="list-group-item">Email: </li>
                         <li class="list-group-item">OTHER: </li>
                     </ul>
                 </div>
             </div>
 
         </div>
     </main>
 
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
 
 </body>
 
 </html>
 `
}

module.exports = createHTML;