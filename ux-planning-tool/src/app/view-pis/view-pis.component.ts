import { Component, OnInit } from '@angular/core';
import { NgFor } from "../../../node_modules/@angular/common";

@Component({
  selector: 'app-view-pis',
  imports: [NgFor],
  templateUrl: './view-pis.component.html',
  styleUrl: './view-pis.component.scss'
})
export class ViewPIsComponent{
 PIs = ['PI202504', 'PI202503', 'PI202502', 'PI202501', 'PI202404', 'PI202403', 'PI202402', 'PI202401', 'PI202304', 'PI202303', 'PI202302', 'PI202301', 'PI202204', 'PI202203', 'PI202202', 'PI202201'];
}