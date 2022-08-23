import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { NacionalnostService } from 'src/app/services/nacionalnost_service';
import { NacionalnostDialogComponent } from '../dialogs/nacionalnost-dialog/nacionalnost-dialog.component';

@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit, OnDestroy {

  displayedColumns = ['id','naziv','skracenica','actions'];
  dataSoruce!: MatTableDataSource<Nacionalnost>;
  subscription!: Subscription 
  @ViewChild(MatSort,{static:false}) sort!:MatSort
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  constructor(private nacionalnost_service:NacionalnostService , public dialog: MatDialog){ }

  ngOnInit(): void {
  
    this.loadData();
  
  }


ngOnDestroy(): void {

  this.subscription.unsubscribe;

}


public loadData() {
  this.subscription=this.nacionalnost_service.getAllNacionalnosts()
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


public openDialog(flag: number, id?:number, naziv?:string, skracenica?:string) {
  const dialogRef = this.dialog.open(NacionalnostDialogComponent, {data: {id,naziv,skracenica}});
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


