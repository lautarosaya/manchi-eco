import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonAccordionGroup,
  IonItem,
  IonAccordion,
  IonLabel,
} from '@ionic/angular/standalone';
import { DatosPage } from '../datos/datos.page';
import { ConfigPage } from '../config/config.page';
import { IngresoPage } from '../ingreso/ingreso.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonAccordion,
    IonItem,
    IonAccordionGroup,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    DatosPage,
    ConfigPage,
    IngresoPage,
  ],
})
export class FolderPage {
  public folder!: string;
  constructor() {}
}
