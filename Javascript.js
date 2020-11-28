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

//for the table sheet
$.getJSON("https://docs.google.com/spreadsheets/d/1vhB-BkDKROFq8B5EEaXe1nQMvJe-V43w__RgtTEBe-k/edit?usp=sharing", function (data) {

    var sheetData = data.feed.entry;

    var i;
    for (i = 0; i < sheetData.length; i++) {

      var name = data.feed.entry[i]['gsx$_cn6ca']['$t'];
      var age = data.feed.entry[i]['gsx$_cokwr']['$t'];
      var email = data.feed.entry[i]['gsx$_cpzh4']['$t'];

      document.getElementById('demo').innerHTML += ('<tr>'+'<td>'+name+'</td>'+'<td>'+age+'</td>'+'<td>'+email+'</td>'+'</tr>');

    }
  });