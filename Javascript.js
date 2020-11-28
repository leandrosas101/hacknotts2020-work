FilterSelection("all")
FilterRecipes("all")

function FilterSelection(RecipeName) {
    var Recipes = document.getElementsByClassName("filterDiv");
    var RecipeIndex;
    if (RecipeName == "all") {
        for (RecipeIndex = 0; RecipeIndex < Recipes.length; RecipeIndex++) {
            Recipes[RecipeIndex].style.display = "block";
        }
    }
    for (RecipeIndex = 0; RecipeIndex < Recipes.length; RecipeIndex++) {
        if (Recipes[RecipeIndex] != RecipeName) {
            Recipes[RecipeIndex].style.display = "none";
        } else {
            Recipes[RecipeIndex].style.display = "block";
        }
    }
}

function FilterFolders(FolderName) {
    var Folders = document.getElementsByClassName("Folders")
    var FolderIndex;
    if (FolderName == "All") {
        for (FolderIndex = 0; FolderIndex < Folders.length; FolderIndex++) {
            Folders[FolderIndex].style.display = "block";
        }
    }
    for (FolderIndex = 0; FolderIndex < Folders.length; FolderIndex++) {
        if (Folders[FolderIndex] != FolderName) {
            Folders[FolderIndex].style.display = "none";
        } else {
            Folders[FolderIndex].style.display = "block";
        }
    }
}