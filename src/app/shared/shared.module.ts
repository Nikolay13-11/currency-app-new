import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SelectButtonModule} from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputSwitchModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    SelectButtonModule,
    SliderModule
  ],
  exports: [
    InputSwitchModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    SliderModule,
    SelectButtonModule,
  ]
})
export class SharedModule { }
