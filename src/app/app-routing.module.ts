import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './components/core/autor/autor.component';
import { OnamaComponent } from './components/core/onama/onama.component';
import { PocentaComponent } from './components/core/pocenta/pocenta.component';
import { IgracComponent } from './components/igrac/igrac.component';
import { LigaComponent } from './components/liga/liga.component';
import { NacionalnostComponent } from './components/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/tim/tim.component';


const routes: Routes = [

  { path: 'igrac', component: IgracComponent },
  
  { path: 'liga', component: LigaComponent },
  
  { path: 'nacionalnost', component: NacionalnostComponent },

  { path: 'home', component: PocentaComponent },

  { path: 'autor', component: AutorComponent },

  { path:'',  component: PocentaComponent, pathMatch: 'full' },
  
  { path: 'tim', component: TimComponent },

  { path: 'onama', component: OnamaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
