import { Component, OnInit } from '@angular/core';
import { AuthRESTService } from '@app/services/auth-rest.service';
import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { ScriptService } from '@app/services/script.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgxSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngFormLogin: FormGroup;
  submitted = false;
  returnUrl: any;
  public isError = false;
  public isLogged =false;
  message:any="Error en datos de acceso"; 
  constructor(
    private spinner: NgxSpinnerService,
    public AuthRESTService:AuthRESTService,
    public global:GlobalService,
    public _butler:Butler,
    public script:ScriptService,
    public virtualRouter:virtualRouter,
    private formBuilder: FormBuilder,
  ) { 
    if(
      this.AuthRESTService.getCurrentUser()
    ){
      // this.virtualRouter.routerActive="home";
    }
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ngFormLogin.controls;
  }
  onIsError(): void {
    // this.ngxService.stop("loader-02");
  this.isError = true;
  // this.ngxService.stop("loader-02");
  setTimeout(() => {
    this.isError = false;
  }, 4000);
}
  onLoggedin(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      // this.router.navigate(['']);
    }
  }
  onLogin(){
    this.submitted = true;
    if (this.ngFormLogin.invalid) {
      return;
    } 
    //  this.ngxService.start("loader-02");
    // this.spinner.show();
    return this.AuthRESTService.loginUser(
      this.ngFormLogin.value.email, 
      this.ngFormLogin.value.password
    )
    .subscribe( 
      data => {
        this.AuthRESTService.setUser(data.user);
        const token = data.id;
        const { username, email, id, type } = data.user;
        this.global.currentUser={ username, email, id, type };
        console.log(JSON.stringify(this.global.currentUser))
        // this.yeoman.user=data;
        this.AuthRESTService.setToken(token);
        localStorage.setItem('userId', data.userId);
        this._butler.userd="p"+data.userId;
        this._butler.isLogged=true;
        this._butler.name=data.name;
        this._butler.userActive=data;
        let typeAct=data.user.type;
        this.isError = false;
        if(typeAct=='client'){
          // this.global.findClient();
          // this.yeoman.idClient='c'+data.userId;
        }
        // this.spinner.hide();
        // this.ngxService.stop("loader-02");
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('type', typeAct);
        this.global.ClientFicha();
        this.virtualRouter.routerActive="home";
        // this.router.navigate(['']);      
      },
       error => this.onIsError()
    ); 
  }


}
