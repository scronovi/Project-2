/******************************************
Tim Degerman
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*
Global variables
*/
const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

/*
Creating the function to show a page.
*/
const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage);

   for (let i = 0; i < list.length; i += 1){
      i >= startIndex && i < endIndex ? list[i].style.display = 'block' : list[i].style.display = 'none';
   
   }
}

/*
Generating, appending and adding functionality to the pagination buttons.
*/

const appendPageLinks = (list) => {
   let amountOfPages = list.length / itemsPerPage;

   const page = document.querySelector('.page');

   const div = document.createElement('div');
   div.className = 'pagination';
   
   const ul = document.createElement('ul');

   page.appendChild(div);
   div.appendChild(ul);

   for (let i = 0; i < amountOfPages; i += 1){
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.href = '#';
      a.textContent = i + 1;

      if (i === 0) {
         a.className = 'active';
      }
      a.addEventListener('click', function(){
         let linksTag = document.getElementsByTagName('a');
         for (let j = 0; j < amountOfPages; j += 1) {
            let hyperLinks = linksTag[j];
            hyperLinks.classList.remove('active');
         }
         event.target.className = 'active';
         showPage(list, a.textContent);
      });
   }
}

// Calling the functions
showPage(studentList, 1);
appendPageLinks(studentList);