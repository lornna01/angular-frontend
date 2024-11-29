import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html'
})
export class LoginComponent {
username: string = '';
password: string = '';

constructor(private authService: AuthService) {}

onLogin() {
this.authService.login(this.username, this.password).subscribe(response => {
console.log('¡Inició sesión correctamente!');
});
}
}