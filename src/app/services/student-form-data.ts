import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { Students } from '../models/student';

@Injectable()
export class StudentFormDataService
{
    constructor(private http: Http) { }

    getStudents() {
        let uri = 'http://localhost:3000/public/json/form-data.json';

        return this.http.get(uri).map(res => res.json());
    }

    saveStudents(students: Students) {
        let postData = JSON.stringify(students);

        console.log('Post', postData);
    }
}