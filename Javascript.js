function openTab(TabName) {
    var Index;
    var Tabs = document.getElementsByClassName("recipe");
    for (Index = 0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
}

function filterSelection(Element) {
    var Elements = document.getElementsByClassName("filterDiv");
    var ElementIndex;
    for (ElementIndex = 0; ElementIndex < Elements.length; ElementIndex++) {
        Elements[ElementIndex].style.display = "none";
        if ((Element == "type") && (Elements[ElementIndex] == "filterDiv type")) {
            Elements[ElementIndex].style.display = "block";
        } else if ((Element == "ingredient") && (Elements[ElementIndex] == "filterDiv ingredient")) {
            Elements[ElementIndex].style.display = "block";
        }
    }
}