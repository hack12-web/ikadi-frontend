import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';


interface Gender{
  value: string;
  viewValue: string;
}
interface IsLive{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-administration-people',
  templateUrl: './administration-people.component.html',
  styleUrls: ['./administration-people.component.css']
})
export class AdministrationPeopleComponent {

  public peopleForm: FormGroup | any;
  public peopleItems:any[] | any;
  public webcamImage: WebcamImage | any;
  private trigger: Subject<void> = new Subject<void>();

  public gender: Gender[]=[
    {value : "M", viewValue: "M"},
    {value : "F", viewValue: "F"}
  ]
  public islive: IsLive[]=[
    {value:"Yes", viewValue:"Yes"},
    {value:"Not", viewValue:"Not"}
  ]

  constructor(private fb: FormBuilder, private service: SharedService, private _snackBar: MatSnackBar){
    this.peopleForm = this.fb.group({
      nom_Pr: ["", Validators.required],
      ag_Pr: ["", Validators.required],
      fnc_Pr: ["", Validators.required],
      is_Alifepr: ["", Validators.required],
      nt_Pr: ["", Validators.required],
      cl_Pr: ["", Validators.required],
      cl_Npr: ["", Validators.required],
      nm_Mr: ["", Validators.required],
      ag_Mr: ["", Validators.required],
      fnc_mr: ["", Validators.required],
      is_Alifemr: ["", Validators.required],
      nt_Mr: ["", Validators.required],
      cl_Mr: ["", Validators.required],
      cl_Nmr: ["", Validators.required],
      nom_Enf: ["", Validators.required],
      sex_Enf: ["", Validators.required],
      date_Nsc: ["", Validators.required],
      date_Enreg: ["", Validators.required],
      empl_Name: ["", Validators.required],
    });
    this.getPersonnes();
  }
  public triggerSnapshot():void{
    this.trigger.next();
  }
  public handleImage(webcamImage: WebcamImage):void{
    console.info('saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }
  public get triggerObservable():Observable<void>{
    return this.trigger.asObservable();
  }
  public clearFilds():void{
    this.peopleForm.reset();
  }
  public async getPersonnes(){
      await this.service.getPersonnes().subscribe(data =>{
      this.peopleItems = data;
    });
  }
  public async postPersonnes(value:any){
      this.service.postPersonne(value).subscribe(res =>{
      this.openSnackBar(res,"OK");
      this.getPersonnes();
      this.peopleForm.reset();
    }); 
  }
  public getAllFildsData(a:any,b:any,c:any,d:any,e:any,f:any,g:any,h:any,i:any,j:any,k:any,l:any,m:any,n:any):void{}
  public openSnackBar(message: string, action: string){
    return this._snackBar.open(message, action);
  }
}
