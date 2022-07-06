$("#NEXT1").click(setNewBG);
function setNewBG() { 
    if ( ($("#red1").css("background-color") == "rgb(128, 128, 128)") && 
    ($("#orange1").css("background-color") == "rgb(128, 128, 128)") && 
    ($("#green1").css("background-color") == "rgb(128, 128, 128)")) {
        $("#red1").css("background-color", "rgb(255, 0, 0)");           
    } else if ($("#red1").css("background-color") == "rgb(255, 0, 0)") {
        $("#orange1").css("background-color", "rgb(255, 165, 0)");
        $("#red1").css("background-color", "rgb(128, 128, 128)");        
    } else if ($("#orange1").css("background-color") == "rgb(255, 165, 0)") {
        $("#green1").css("background-color", "rgb(0, 128, 0)");
        $("#orange1").css("background-color", "rgb(128, 128, 128)");          
    } else if ($("#green1").css("background-color") == "rgb(0, 128, 0)") {
        $("#red1").css("background-color", "rgb(255, 0, 0)");
        $("#green1").css("background-color", "rgb(128, 128, 128)");
        $("#orange1").css("background-color", "rgb(128, 128, 128)");        
    }
}



