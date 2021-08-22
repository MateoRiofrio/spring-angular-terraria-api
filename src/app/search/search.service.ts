import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Weapon} from "../model/items/weapon/Weapon";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private itemUrl: string;

    constructor(private http: HttpClient) {
        this.itemUrl = 'http://localhost:8080/api/v1/';
    }

    public findAll(): Observable<Weapon[]> {
        return this.http.get<Weapon[]>(this.itemUrl + "weapons")
    }

    public findStartsWith(start: string): Observable<Weapon[]> {
        let request_url = this.itemUrl + "item_name?like=" + start
        return this.http.get<Weapon[]>(request_url)
    }
}