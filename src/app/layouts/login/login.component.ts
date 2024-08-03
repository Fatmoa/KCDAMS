import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }
  ngOnInit(): void {
    this.configureForm()
  }

  configureForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onLogin() {
    
    setTimeout(() => {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.loginService.getLogin(username, password).subscribe((resp: any) => {
        
        if (resp[0].userStatus == '1') {

          sessionStorage.setItem("userId", resp[0].userId);
          sessionStorage.setItem("username", resp[0].username);
          sessionStorage.setItem("roleName", resp[0].roleId.roleName);
   
          switch (resp[0].roleId.roleName) {
            case 'ADMINISTRATOR':
              this.router.navigateByUrl('home').then(() => {
                location.reload()
              })
              
              break;
            case 'NURSE':
              this.router.navigateByUrl('/home').then(() => {
                location.reload()
              })
              break;
             default:
              this.router.navigateByUrl("")
                
          }

        }
        else{
          console.log('user blocked');
        }

      })
    })

  
  }

}
