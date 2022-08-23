import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Igrac } from 'src/app/models/igrac';
import { Liga } from 'src/app/models/liga';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { Tim } from 'src/app/models/tim';
import { IgracService } from 'src/app/services/igrac-service.service';

import { LigaService } from 'src/app/services/liga_service';
import { NacionalnostService } from 'src/app/services/nacionalnost_service';
import { TimService } from 'src/app/services/tim_service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {


  public flag!: number;


  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<IgracDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Igrac, public timService: TimService,public nacionalnostService : NacionalnostService, public ligaService: LigaService,
              public igracService: IgracService
              ) { }
           
  timovi!: Tim[];
  nacionalnosti!: Nacionalnost[];

  compareTo(a: any, b: any) {
    return a.id == b.id;
  }
  ngOnInit(): void {
   
      this.timService.getAllTims().subscribe(data => {
        this.timovi = data;});
  
        this.nacionalnostService.getAllNacionalnosts().subscribe(data => {
          this.nacionalnosti = data;  
      });
  }

  public add(): void {
    this.igracService.addIgrac(this.data).subscribe(data => {    this.snackBar.open('Uspesno dodata igrac' + data.broj_reg, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  


  public update(): void {
    this.igracService.updateIgrac(this.data).subscribe(data => {    this.snackBar.open('Uspesno azurirana igrac' + this.data.broj_reg, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  


  public delete(): void {
    this.igracService.deleteIgrac(this.data.id).subscribe(data => {    this.snackBar.open('Uspesno obrisana igrac' + this.data.broj_reg, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  
  

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('odustali ste', "OK",{duration:1500} );
  }
  }

