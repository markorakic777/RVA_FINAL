import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { TimService } from 'src/app/services/tim_service';
import { TimDialogComponent } from '../dialogs/tim-dialog/tim-dialog.component';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {

  constructor(private tim_service:TimService , public dialog: MatDialog) { }


  displayedColumns = ['id', 'naziv', 'osnovan', 'sediste', 'liga', 'actions'];
  dataSoruce!: MatTableDataSource<Tim>;
  selektovanTim!:  Tim;
  subscription!: Subscription 
  @ViewChild(MatSort,{static:false}) sort!:MatSort
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  ngOnInit(): void {
  
    this.loadData();
  
  }


ngOnDestroy(): void {

  this.subscription.unsubscribe;

}


public loadData() {
  this.subscription=this.tim_service.getAllTims()
  .subscribe (
  data => {
  //{console.log(data);}
  this.dataSoruce=new MatTableDataSource(data);
  this.dataSoruce.sort = this.sort;
  this.dataSoruce.paginator=this.paginator;
}),
  (error:Error) => {
    console.log(error.name + ' ' + error.message);
  }
}


public openDialog(flag: number, id?:number, naziv?:string, osnovan?:Date, sediste?:string, liga?:Liga) {
  const dialogRef = this.dialog.open(TimDialogComponent, {data: {id,naziv,osnovan,sediste,liga}});
  dialogRef.componentInstance.flag=flag;
  dialogRef.afterClosed().subscribe(result => {if (result==1) this.loadData();});

}

public selectRow(row:any) {
console.log(row)
this.selektovanTim=row;
}

applyFilter(filterValue: any) {
  filterValue = filterValue.target.value;
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSoruce.filter = filterValue;
}

}
