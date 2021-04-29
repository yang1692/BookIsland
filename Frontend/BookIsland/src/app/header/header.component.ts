import {Component, Input} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {CartService} from '../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(
    public auth: AuthService,
    private cs: CartService
  ) {
  }
  @Input()
  style: string | undefined;
  async logout(): Promise<void> {
    await this.cs.updateCart().subscribe();
    this.cs.subtotal = 0;
    this.auth.logout()
      .subscribe(res => {
        this.auth.user = res.success ? null : this.auth.user;
      });
  }
}
