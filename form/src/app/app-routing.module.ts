import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettableComponent } from './gettable/gettable.component';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';


const routes: Routes = [
  { path: '', component: NameEditorComponent },
  { path: 'app', component: GettableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
