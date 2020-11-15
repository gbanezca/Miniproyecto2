import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeListService } from '../../services/personaje-list.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  public characters = [];
  public characterSeleccionado;
  public infoPaginacion;
  public loading = true;
  public search = false;

  constructor( private personajeListService: PersonajeListService,
               public modalService: ModalService,
               private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  public getCharacter(page?: number): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let page = +params.get('page');
      this.personajeListService.getcharcters(page).subscribe(
        (data: any) => {
          this.loading = false;
          this.characters = data.results;
          this.infoPaginacion = data.info;
        }
        );
    });

  }

  public abrirModal(character): void {
    this.characterSeleccionado = character;
    this.modalService.abrirModal();
  }

  public getCharacterSon(event): void {
    this.characters = event;
    this.search = true;
  }

}
