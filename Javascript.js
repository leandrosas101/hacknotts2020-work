function openTab(TabName) {
    var Index;
    var Tabs = document.getElementsByClassName("recipe");
    for (Index = 0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
}

function filterSelection(Element, Type) {
    var Elements = document.getElementsByClassName("filterDiv");
    var ElementIndex;
    for (ElementIndex = 0; ElementIndex < Elements.length; ElementIndex++) {
        ClassNameSplit = Element.className.split(" ");
        ClassNameTypeSplit = Type.split(" ");
    }
}