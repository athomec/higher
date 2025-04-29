$(function () {
    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    // Menu
    $('.menu .children').click(function(e){
        e.preventDefault();
        $(this).toggleClass('show');
    })
});
