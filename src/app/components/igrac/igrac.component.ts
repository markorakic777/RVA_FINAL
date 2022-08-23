import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Igrac } from 'src/app/models/igrac';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { Tim } from 'src/app/models/tim';
import { IgracService } from 'src/app/services/igrac-service.service';

import { IgracDialogComponent } from '../dialogs/igrac-dialog/igrac-dialog.component';


@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit, OnDestroy, OnChanges {

  displayedColumns = ['id','ime','prezime','broj_reg','datum_rodjenja','nacionalnost','tim','actions'];
  dataSource!: MatTableDataSource<Igrac>;
  subscription!: Subscription; 
  @Input() selektovanTim!:Tim;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private igrac_service:IgracService , public dialog: MatDialog){ }

ngOnChanges(changes: SimpleChanges): void {
  if(this.selektovanTim.id) this.loadData();
}

  ngOnInit(): void {
  
    this.loadData();
  
  }


ngOnDestroy(): void {

  this.subscription.unsubscribe;

}


public loadData() {

  //razmak
  
  this.subscription=this.igrac_service.getIgraciForTim(this.selektovanTim.id)
  .subscribe (
  data => {

  this.dataSource=new MatTableDataSource(data);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}),
  (error:Error) => {
    console.log(error.name + ' ' + error.message);
  }

}


public openDialog(flag: number, id?: number, ime?: string , prezime?: string , broj_reg?: string , datum_rodjenja?: Date, nacionalnost?: Nacionalnost, tim?: Tim) {

  const dialogRef = this.dialog.open(IgracDialogComponent, {data: {id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost,tim}});
  dialogRef.componentInstance.flag=flag;
  dialogRef.componentInstance.data.tim=this.selektovanTim
  dialogRef.afterClosed().subscribe(result => {if (result==1) this.loadData();});

}


applyFilter(filterValue: any) {
  filterValue = filterValue.target.value;
  //ako ima viska razmaka
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  //ugradjen property filter, kao i sort i paginator
  this.dataSource.filter = filterValue;
}

}
