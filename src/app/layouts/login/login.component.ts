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
        // console.log(resp);


        if (resp.userStatus == '1') {

          sessionStorage.setItem("userId", resp.userId);
          sessionStorage.setItem("username", resp.username);
          sessionStorage.setItem("roleName", resp.roleId.roleName);

          switch (resp.roleId.roleName) {
            case 'ADMINISTRATOR':
              this.router.navigateByUrl('home').then(() => {
                location.reload()
              })

              break;
              case 'RECEPTION':
                this.router.navigateByUrl('home').then(() => {
                  location.reload()
                })

                break;
            case 'NURSE':
              this.router.navigateByUrl('/home').then(() => {
                location.reload()
              })

              break;
              case 'PSYCHOLOGIST':
                this.router.navigateByUrl('home').then(() => {
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
