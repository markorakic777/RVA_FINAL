import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga_service';

@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit {


  public flag!: number;


  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<LigaDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Liga,
              public ligaService: LigaService
              ) { }
           



  ngOnInit(): void {
  }

  public add(): void {
    this.ligaService.addLiga(this.data).subscribe(data => {    this.snackBar.open('Uspesno dodata liga' + data.naziv, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  


  public update(): void {
    this.ligaService.updateLiga(this.data).subscribe(data => {    this.snackBar.open('Uspesno azurirana liga' + this.data.naziv, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  


  public delete(): void {
    this.ligaService.deleteLiga(this.data.id).subscribe(data => {    this.snackBar.open('Uspesno obrisana liga' + this.data.naziv, 'OK', {duration:2500})
  });
  (error:Error) => {console.log(error.name + ' ' + error.message ) ; this.snackBar.open('Dogodila se greska. Pokusaj ponovo', "OK",{duration:2500} );}}
  
  

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('odustali ste', "OK",{duration:1500} );
  }
  }

