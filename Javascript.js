FilterFolders("All")
FilterRecipes("All")
function FilterRecipes(RecipeName) {
    var Recipes = document.getElementsByClassName("Filter");
    var RecipeIndex;
    if (RecipeName == "All") {
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
            Folders[FoldersIndex].style.display = "block";
        }
    }
}