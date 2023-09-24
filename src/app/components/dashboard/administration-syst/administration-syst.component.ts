import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/services/shared.service';
import { SnackOneComponent } from '../../snack-bar/snack-one/snack-one.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-administration-syst',
  templateUrl: './administration-syst.component.html',
  styleUrls: ['./administration-syst.component.css']
})
export class AdministrationSystComponent {
  panelOpenState: boolean = true;

  adminItems: any = [];
  adminItemsById: any[] = [];
  public _filterInput: string = "";
  public adminsFilter: any = [];
  public adminForm: FormGroup | any;
  public deleteForm: FormGroup | any;

  _id : number = 0;
  _uniqueID: string = "";
  _username: string = "";
  _password: string = "";
  admin_items: any[] = [];

  constructor(private service: SharedService, private fb: FormBuilder, private _snackBar: MatSnackBar ){
    this.adminForm = this.fb.group({
      id:[""],
      uniqueID:["", Validators.required],
      username:["", Validators.required],
      password:["", Validators.required]
    });
    this.deleteForm = this.fb.group({
      id:["", Validators.required]
    });
    this.getAdminItems();
  }

  public get filterInput(){
    return this._filterInput;
  }

  public set filterInput(value : string) {
    this._filterInput = value;
    this.adminsFilter = this.filterAdminByUniqueId(value);
  }

  public async getAdminItems():Promise<void>{
    this.service.getAdmin().subscribe(data =>{
      this.adminItems = data;
      this.adminsFilter = data;
    });
  }
  public fillField(a:any, b:any, c:any, d:any){
    this._id = a;
    this._uniqueID = b;
    this._username = c;
    this._password = d;
    return this.service.getAdmin().subscribe(data =>{
      this.admin_items = data;
      for (let x = 0; x < this.admin_items.length; x++) {
        this.admin_items[x].id = a;
        this.admin_items[x].uniqueID = b;
        this.admin_items[x].username = c;
        this.admin_items[x].password = d;
      }
    })
    
  }
  public async getAdminItemsByUniqueId(value:any){
    
  }

  public async postAdminItems(value: any){
    this.service.postAdmin(value).subscribe(res =>{
      this.openSnackBar(res, "OK");
      this.getAdminItems();
      this.adminForm.reset();
    });
  }

  public async deleteAdminItems(value: any){
    return this.service.deleteAdmin(value.id).subscribe(res =>{
      this.openSnackBar(res, "OK");
      this.getAdminItems();
    });
  }

  public async updateAdminItems(value:any){
    // return this.service.updateAdmin(value).subscribe(res=>{
    //   this.openSnackBar(res, "OK");
    //   this.adminForm.reset();
    //   this.getAdminItems();
    // });
    console.log(value);
  }
  public openSnackBar(message: string, action: string){
    return this._snackBar.open(message, action);
  }

  public filterAdminByUniqueId(filterTerm: string){
    if(this.adminItems === 0 || this.filterInput ==='')
    {
      return this.adminItems;
    }
    else
    {
      return this.adminItems.filter((admin: any)=>{
        return admin.UniqueID.toLowerCase() === filterTerm.toLowerCase();
      });
    }
  }
}
