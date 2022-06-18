$(function() {

  let filter = $("[data-filter]");

  filter.on('click',function() {
    event.preventDefault();

    let cat = $(this).data('filter');

    console.log(cat)
  })







})
