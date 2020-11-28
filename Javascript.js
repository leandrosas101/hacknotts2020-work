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
        if (Element == "all") {
            Elements[ElementIndex].style.display = "block";
        } else {
            Elements[ElementIndex].style.display = "none";
            /*var ClassNameSplit = Elements[ElementIndex].className.split(" ");
            if (ClassNameSplit[1] == "type") {
                Elements[ElementIndex].style.display = "block";
            } else {
                Elements[ElementIndex].style.display = "block";
            }*/
        }
    }
}