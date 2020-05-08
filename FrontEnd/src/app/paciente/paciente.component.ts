import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medico } from './Model/MedicoModel.model';
import { MedicoService } from '../Service/medico.service';
import { Paciente } from './Model/paciente.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  PacienteForm: FormGroup;
  urlGet: string = '';
  medicos: string[];
  medicoService: MedicoService;
  paciente: Paciente;
  tipoSanguineo: string[] = ['O+','O-','A+','A-','AB-','AB+','B-','B+'];
  
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuilder.group({
      medicos: [null],
      tipoSanguineo: [null],
      paciente: [null]
    });
    this.medicoService.ObterTodos().subscribe(data => {
      this.medicos = data; 
      console.log(data);
    });
  }
  nome_medico: any = this.PacienteForm.get('medico');
  Salvar() {
    this.medicoService.Cadastrar(this.PacienteForm.value).subscribe(
      data=>{
        this.paciente.nome_medico = data.toString().substring(0);
        this.paciente.nome_paciente = data.toString().substring(1);
        this.paciente.tipo_sanguineo = data.toString().substring(2);
      }
    )
  }
}
