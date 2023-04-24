import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Enterprise } from '../models/enterprises.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  users: User[] = []
  enterprises: Enterprise[] = []

  baseUrl = 'http://localhost:3001/users'
  baseEnterpriseUrl = "http://localhost:3001/enterprises"

  constructor(private bar: MatSnackBar, private http: HttpClient, private router: Router) {
  }
  showAlert = (message: string, title: string) => {
    this.bar.open(message, title, { duration: 3000 });
  }
  validateInputs(object: any): boolean {
    let aux;
    Object.keys(object).forEach(function (key) {
      if (object[key] == null || object[key] == " ") {
        aux = 1;
      }
    });
    if (aux) {
      return false;
    } else {
      return true;
    }
  }

  usersRequest(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  getUsers() {
    this.usersRequest().subscribe(response => this.users = response)
  }
  enterpriseRequest(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(this.baseEnterpriseUrl);
  }
  checkUser(email: string, password: string): boolean {
    return this.users.some(
      user => user.email === email
        &&
        user.password === password
    );
  }
  checkEnterprise(email: string, password: string): boolean {
    return this.enterprises.some(
      enterprise => enterprise.email === email
        &&
        enterprise.password === password
    );
  }
  checkLogin(email: string, password: string): void {
    if (this.checkEnterprise(email, password)) {
      this.showAlert('Bem vindo', 'Sucesso!');
    } else if (this.checkUser(email, password)) {
      this.showAlert('Bem vindo', 'Sucesso!');
      this.homePath();
    }
    else {
      this.showAlert('Email ou senha incorretos', 'Erro');
    }
  }
  homePath() {
    this.router.navigate(['/'])
  }
  adPath(){
    this.router.navigate(['ad'])
  }
}
