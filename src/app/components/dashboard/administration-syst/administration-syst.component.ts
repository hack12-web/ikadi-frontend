import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/services/shared.service';
import { SnackOneComponent } from '../../snack-bar/snack-one/snack-one.component';

@Component({
  selector: 'app-administration-syst',
  templateUrl: './administration-syst.component.html',
  styleUrls: ['./administration-syst.component.css']
})
export class AdministrationSystComponent {
  panelOpenState: boolean = true;

  adminItems: any[] = [];
  public adminForm: FormGroup | any;
  public deleteForm: FormGroup | any;

  constructor(private service: SharedService, private fb: FormBuilder, private _snackBar: MatSnackBar ){
    this.adminForm = this.fb.group({
      uniqueID:["", Validators.required],
      username:["", Validators.required],
      password:["", Validators.required]
    });
    this.deleteForm = this.fb.group({
      id:["", Validators.required]
    });
    this.getAdminItems();
    this.openSnackBar("Iloveu","OK");
  }

  public async getAdminItems():Promise<void>{
    await this.service.getAdmin().subscribe(data =>{
      this.adminItems = data;
    });
  }
  public async postAdminItems(value: any){
      await this.service.postAdmin(value).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.adminForm.reset();
    });

  }
  public async deleteAdminItems(value: any){
    return await this.service.deleteAdmin(value).subscribe(res =>{
      console.log(res);
    });
  }
  public openSnackBar(message: string, action: string){
    return this._snackBar.open(message, action);
  }
}
