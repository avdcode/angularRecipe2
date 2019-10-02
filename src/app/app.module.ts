import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetail } from "./recipes/recipe-list/recipe-detail/recipe-detail.component";
import { RecipeItem } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingList } from "./shopping-list/shopping-list.component";
import { ShoppingEdit } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetail,
    RecipeItem,
    ShoppingList,
    ShoppingEdit
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
