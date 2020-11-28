function openTab(TabName) {
    var Index;
    var Tabs = document.getElementsByClassName("recipe");
    for (Index = 0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
}

function filterSelection(Element) {
    var Elements = document.getElementsByClassName("folder");
    var ElementIndex;
    for (ElementIndex = 0; ElementIndex < Elements.length; ElementIndex++) {
        Elements[ElementIndex].style.display = "none";
        if (Element == "all") {
            Elements[ElementIndex].style.display = "block";
        } else if (Element == "type") {
            var TypeClasses = document.getElementsByClassName("folder type");
            for (TypeIndex = 0; TypeIndex < TypeClasses.length; TypeIndex++) {
                    TypeClasses[TypeIndex].style.display = "block";
            }
        } else {
            var IngredientClasses = document.getElementsByClassName("folder ingredient");
            for (IngredientIndex = 0; IngredientIndex < IngredientClasses.length; IngredientIndex++) {
                IngredientClasses[IngredientIndex].style.display = "block";
            }
        }
    }
}