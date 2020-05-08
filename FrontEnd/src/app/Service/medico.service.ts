import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Medico } from '../paciente/Model/MedicoModel.model';
import { Paciente } from '../paciente/Model/paciente.model';

@Injectable({
    providedIn: 'root'
})

export class MedicoService extends BaseService {

    public header: HttpHeaders = new HttpHeaders();

    constructor(http: HttpClient) {
        super(http, '/api/Paciente')
    }

    //Get
    public ObterTodos() {
        return this.http.get<string[]>(this.apiCadastroUrl);
    }
    
    //Post
    public Cadastrar(paciente: Paciente) {
        return this.http.post(this.apiCadastroUrl, paciente);
    }
}