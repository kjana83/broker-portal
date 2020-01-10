import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService,
    private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
    //console.log(this.sessionService.currentUser);
    //if (this.sessionService.currentUser) return true;
    //this.router.navigate(['/login']);
    //return false;
  }
}
