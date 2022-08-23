import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VoziloComponent } from './primer_components/vozilo/vozilo_component';
import { AutomobilComponent } from './primer_components/automobil/automobil.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PocentaComponent } from './components/core/pocenta/pocenta.component';
import { AutorComponent } from './components/core/autor/autor.component';
import { OnamaComponent } from './components/core/onama/onama.component';
import { IgracComponent } from './components/igrac/igrac.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { LigaComponent } from './components/liga/liga.component';
import { TimComponent } from './components/tim/tim.component';
import { NacionalnostDialogComponent } from './components/dialogs/nacionalnost-dialog/nacionalnost-dialog.component';
import { LigaDialogComponent } from './components/dialogs/liga-dialog/liga-dialog.component';
import { TimDialogComponent } from './components/dialogs/tim-dialog/tim-dialog.component';
import { IgracDialogComponent } from './components/dialogs/igrac-dialog/igrac-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    PocentaComponent,
    AutorComponent,
    OnamaComponent,
    IgracComponent,
    NacionalnostComponent,
    TimComponent,
    NacionalnostDialogComponent,
    LigaComponent,
    LigaDialogComponent,
    TimDialogComponent,
    IgracDialogComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
