// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

// Get the header
//var header = document.getElementById("myHeader");

// Get the offset position of the navbar
//var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position


//document.querySelector('button').addEventListener('click', function() {
 // document.querySelector('#content').style.height= 'auto';
 // this.style.display= 'none';
//});




$(document).ready(function() {
  $(".read").click(function(){
    $(this).prev().toggle();
    $(this).siblings(`.dots`).toggle();

    if($(this).text()==`read more`)
    {
      $(this).text(`read less`);
    }
        else
    {
 
      $(this).text(`read more`)

    }
  });
});

  