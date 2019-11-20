/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


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

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/


const appendPageLinks = (list) => {
   const page = document.querySelector('.page')
   const paginationDiv = document.createElement('div');
   const paginationUl = document.createElement('ul');

   page.appendChild(paginationDiv);
   paginationDiv.appendChild(paginationUl);
   for (let i = 0; i < 5; i += 1){
      const paginationLi = document.createElement('li');
      const paginationA = document.createElement('a');
      paginationA.href = '#';
      paginationA.textContent = (i + 1);

      paginationUl.appendChild(paginationLi);
      paginationLi.appendChild(paginationA);
   }
/*
   <div class="pagination">
      <ul>
         <li>
            <a class="active" href="#">1</a>
         </li>
         <li>
            <a href="#">2</a>
         </li>
         <li>
            <a href="#">3</a>
         </li>
         <li>
            <a href="#">4</a>
         </li>
         <li>
            <a href="#">5</a>
         </li>
      </ul>
   </div>
*/
}
appendPageLinks(studentList);



