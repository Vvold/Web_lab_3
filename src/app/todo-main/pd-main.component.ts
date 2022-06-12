import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder } from "@angular/forms";
import { LocalStorageService } from "../localstorage.service";

interface IPD {
  id: string;
  description: string;
  date: string;
}

@Component({
  selector: 'todo-main',
  templateUrl: './pd-main.component.html',
  styleUrls: ['./pd-main.component.css']
})
export class TodoMainComponent {

  pds: IPD[] = [];

  form = this.fb.group({
    description: [],
    date: []
  });

  constructor(
    private modalService: NgbModal,
    private lsService: LocalStorageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.pds = JSON.parse(this.lsService.get('todos') || '')
  }

  openModal(instance: any) {
    this.modalService.open(instance);
  }

  closeModal() {
    this.modalService.dismissAll()
  }

  onRemovePD(id: string) {
    this.pds = this.pds.filter(todo => todo.id !== id);
    this.lsService.set('todos', JSON.stringify(this.pds));
  }

  onAddPD() {
    this.pds.push({ ...this.form.getRawValue(), id: (Math.floor(Math.random() * 100000)).toString() });
    this.lsService.set('todos', JSON.stringify(this.pds));
    this.form.patchValue({
      description: '',
      date: ''
    });
    this.closeModal();
  }
}
