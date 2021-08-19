import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Item} from "../model/items/Item";

@Injectable()
export class UserService {

    private itemUrl: string;

    constructor(private http: HttpClient) {
        this.itemUrl = 'http://localhost:8080/api/items';
    }

    public findAll(): Observable<Item[]> {
        return this.http.get<Item[]>(this.itemUrl);
    }
}