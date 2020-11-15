import { NgModule } from "@angular/core";

import { LoginModule } from "app/main/pages/authentication/login/login.module";
import { RegisterModule } from "app/main/pages/authentication/register/register.module";
import { MusicModule } from "./music/music.module";
import { FavoriteModule } from "./favorite/favorite.module";

@NgModule({
    imports: [LoginModule, RegisterModule, MusicModule, FavoriteModule],
    declarations: [],
})
export class PagesModule {}
