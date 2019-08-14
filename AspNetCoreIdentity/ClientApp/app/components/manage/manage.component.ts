import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UserVM } from '../../core/domain';

@Component({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent {
    public users: UserVM[] = [];
    
    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string) {
        this.http.get(this.baseUrl + 'api/manage/users').subscribe(result => {
            this.users = result.json() as UserVM[];
            console.log(this.users);
        }, error => console.error(error));
    }
}

