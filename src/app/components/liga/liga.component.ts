import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga_service';
import { LigaDialogComponent } from '../dialogs/liga-dialog/liga-dialog.component';


@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit, OnDestroy {

  displayedColumns = ['id','naziv','oznaka','actions'];
  dataSoruce!: MatTableDataSource<Liga>;
  subscription!: Subscription 

  @ViewChild(MatSort,{static:false}) sort!:MatSort
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;


  constructor(private liga_service:LigaService , public dialog: MatDialog){ }

  ngOnInit(): void {
  
    this.loadData();
  
  }


ngOnDestroy(): void {

  this.subscription.unsubscribe;

}


public loadData() {
  this.subscription=this.liga_service.getAllLigas()
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


public openDialog(flag: number, id?:number, naziv?:string, oznaka?:string) {
  const dialogRef = this.dialog.open(LigaDialogComponent, {data: {id,naziv,oznaka}});
  dialogRef.componentInstance.flag=flag;
  dialogRef.afterClosed().subscribe(result => {if (result==1) this.loadData();});

}

applyFilter(filterValue: any) {
  filterValue = filterValue.target.value;
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSoruce.filter = filterValue;
}
}
