import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Weapon} from "../model/items/Weapon";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private itemUrl: string;

    constructor(private http: HttpClient) {
        this.itemUrl = 'http://localhost:8080/api/weapons';
    }

    public findAll(): Observable<Weapon[]> {
        return this.http.get<Weapon[]>(this.itemUrl);
    }
}