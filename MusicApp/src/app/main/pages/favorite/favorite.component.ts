import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
    selector: "app-favorite",
    templateUrl: "./favorite.component.html",
    styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit {
    displayedColumns: string[] = [
        "position",
        "name",
        "duration",
        "band",
        "avatar",
        "album",
        "action",
    ];
    dataSource: any[];

    constructor() {}

    ngOnInit() {}
}
