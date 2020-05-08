import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class BaseService {
    protected apiControllerUrl;
    protected apiCadastroUrl;

    private readonly urlGet: 'https://medicos-progweb.herokuapp.com/medicos';
    private readonly urlCadastroApi: 'https://localhost:44343';

    constructor(protected http: HttpClient, rota: string) {
        this.apiControllerUrl = this.urlGet;
        this.apiCadastroUrl = this.urlCadastroApi + rota;
    }

    public handleError(error: any){

    }
}