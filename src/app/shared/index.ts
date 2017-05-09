import {NgModule} from '@angular/core'
import {ToastyModule} from 'ng2-toasty';

@NgModule({
declarations:[],
imports:[ToastyModule.forRoot()],
exports:[ToastyModule]
})
export class SharedModule{

}