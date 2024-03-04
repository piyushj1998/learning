import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaScriptComponent } from './JavaScript/JavaScript.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './Angular/Angular.component';
import { InterviewQuestionsComponent } from './Interview/interview-questions.component';
import { ReactComponent } from './Reactjs/react.component';

// { path: '', component: FirstComponent },
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
  path:"javascript",
  component:JavaScriptComponent
  },
  {
  path:"angular",
  component:ReactComponent
  },
  {
  path:"questions",
  component:InterviewQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
