function openTab(TabName) {
    var Index;
    var Tabs = document.getElementsByClassName("containerTab");
    for (Index = 0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
}

function filterSelection(Element) {
    var Elements = document.getElementsByClassName("filterDiv");
    console.log(Elements);
}