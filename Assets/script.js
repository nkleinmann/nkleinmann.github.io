$( function() {

    //declaring variable
    const $nkButton = $("h2.welcome");
    
    //when name clicked, bounce (animate.css)
    $nkButton.on("click", changesClass);

    //defining function that changes class to use animate.css
    function changesClass() {
        setInterval( () => {
            $nkButton.addClass("bounce");
        }, 250);
        $nkButton.removeClass("bounce");
    }
    
});


