import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup | any;
  public adminItem: any[] = [];
  public showSpinner: boolean = false;
  public disabled: boolean = false;
  public hiden_message: boolean = true;

  constructor(private fb: FormBuilder, private route: Router, private service: SharedService){
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
    this.GetAdmin();
  }
  public GetAdmin(){
    return this.service.getAdmin().subscribe(data =>{
      this.adminItem = data;
      console.log(this.adminItem);
    })
  }
  public LoginAdmin(value:any){
    if(this.service.loginAdmin(value)=="Login successfull")
    {
      this.route.navigateByUrl("/dashboard");
    }
    this.showSpinnerProgressBar();
    console.log("Wrong username and password");
  }
  public loginAdmin(value: any):void{
    this.showSpinnerProgressBar();
    this.disabled = true;
    if(value.username == "root" && value.password == "root")
    {
      setTimeout(() =>{
        this.route.navigateByUrl("/dashboard");
      },3000);
    }
    else{
      this.showSpinnerProgressBar();
      setTimeout(() =>{
        this.hiden_message = false;
        this.showSpinner = false;
        this.loginForm.reset();
      },3000);
    }
  }
  
  public showSpinnerProgressBar(){
    // return of(this.showSpinner = true).pipe(delay(1000));
    this.showSpinner = true;
  }
}
