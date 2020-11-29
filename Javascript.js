//Lines 2-9 were adapted from https://www.w3schools.com/howto/howto_js_expanding_grid.asp (How TO - Expanding Grid by W3Schools)
function openTab(TabName) { //Function opens the clicked tab, revealing additional information
    var Index;
    var Tabs = document.getElementsByClassName("recipe"); //Collects all the classes with the class name of "recipe"
    for (Index = 0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display = "none"; //Sets all the display values (CSS) of the classes to "none", hiding the class
    }
    document.getElementById(TabName).style.display = "block"; //Sets the display value of the clicked class (the parameter "TabName") to "block", showing the class
}

//Lines 12-15 were adapted from https://www.w3schools.com/howto/howto_js_filter_elements.asp (How TO - Filter Elements by W3Schools)
function filterSelection(Element) { //Function filters through the folders and displays the classes which meet the filter
    var Elements = document.getElementsByClassName("folder"); //Collects all the classes with the class name of "folder"
    var ElementIndex;
    for (ElementIndex = 0; ElementIndex < Elements.length; ElementIndex++) {
        Elements[ElementIndex].style.display = "none"; //Turns the display value (CSS) of the class to "none", hiding the class
        if (Element == "all") { //If the user wishes to see all the recipes
            Elements[ElementIndex].style.display = "block"; //Sets the display value of the clicked class to "block", showing the class
        } else if (Element == "type") { //If the user wants to see the meal types
            var TypeClasses = document.getElementsByClassName("folder type");
            for (TypeIndex = 0; TypeIndex < TypeClasses.length; TypeIndex++) {
                    TypeClasses[TypeIndex].style.display = "block"; //Sets all the meal type folders to be shown
            }
        } else { //If the user wishes to see the ingredients
            var IngredientClasses = document.getElementsByClassName("folder ingredient");
            for (IngredientIndex = 0; IngredientIndex < IngredientClasses.length; IngredientIndex++) {
                IngredientClasses[IngredientIndex].style.display = "block"; //Sets all the ingredient folders to be shown
            }
        }
    }
}