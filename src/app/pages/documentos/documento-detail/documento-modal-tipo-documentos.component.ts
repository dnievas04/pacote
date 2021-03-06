import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'documento-modal-tipo-documentos',
  templateUrl: './documento-modal-tipo-documentos.component.html',
})
export class DocumentoModalTipoDocumentosComponent implements OnInit {


  tipoDocumentos: any;
  modalHeader: string;
  errorMessage: any;
  

  constructor(private activeModal: NgbActiveModal,
    private router: Router,
    private adminService: AdminService) { }

  closeModal() {
    this.activeModal.close();
  }

  selectTipoDocumento(tipoSelected){
    this.router.navigate([
      'pages/documentos/vehiculos/:idVehiculo/create/:idTipoDocumento',{
        idVehiculo:13, 
        idTipoDocumento: tipoSelected.id
      }]);
    
    this.closeModal();
  }

  ngOnInit() {
    this.getTiposDocumentos();
  }

  getTiposDocumentos():void{
    this.adminService.getTiposDocumentosByEmpresa()
    .subscribe(tiposDocumentos => {
      this.tipoDocumentos = tiposDocumentos;
    }, error => this.errorMessage = <any>error);
  }
}