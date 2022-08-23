import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { LigaService } from 'src/app/services/liga_service';
import { TimService } from 'src/app/services/tim_service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit {

  public flag!: number;


  constructor(public snackBar:MatSnackBar,
              public timRef: MatDialogRef<TimDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Tim, public ligaService:LigaService,
              public timService: TimService
              ) { }
           

  lige!: Liga[];


  compareTo(a: any, b: any) {
    return a.id == b.id;
  }
  
  ngOnInit(): void {
    this.ligaService.getAllLigas().subscribe(data => {
	  this.lige = data;
    });
  }
  public add(): void {
    this.timService.addTim(this.data).subscribe(data => {    this.snackBar.open('Uspesno dodata tim' + data.naziv, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  


  public update(): void {
    this.timService.updateTim(this.data).subscribe(data => {    this.snackBar.open('Uspesno azurirana tim' + this.data.naziv, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  


  public delete(): void {
    this.timService.deleteTim(this.data.id).subscribe(data => {    this.snackBar.open('Uspesno obrisan tim' + this.data.naziv, 'OK', {duration:2500})
  }),
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  
  

  public cancel(): void {
    this.timRef.close();
    this.snackBar.open('odustali ste', "OK",{duration:1500} );
  }

  

    
}