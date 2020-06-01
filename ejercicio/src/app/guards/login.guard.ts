
import { CanActivate } from '@angular/Router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(){}

    canActivate(): boolean{
        // aqui logica
            return true;
    }
}