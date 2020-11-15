import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { forkJoin } from "rxjs";
import Swal from "sweetalert2";

@Component({
    selector: "app-music-detail",
    templateUrl: "./music-detail.component.html",
    styleUrls: ["./music-detail.component.scss"],
})
export class MusicDetailComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
