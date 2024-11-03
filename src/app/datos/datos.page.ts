import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
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
  ],
})
export class DatosPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
