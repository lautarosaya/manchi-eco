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
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
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
export class IngresoPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
