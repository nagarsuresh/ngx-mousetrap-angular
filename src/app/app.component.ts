import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgxMousetrapService } from 'projects/ngx-mousetrap/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngx-mousetrap-angular';
  clickedAt = null;

  keypressed: string[] = [];

  keysBound = '? | esc | up up down down | command+shift+k | ctrl+s | command+s | alt+r | h e l l o';

  private subscription: Subscription;

  @ViewChild('demoArea', { read: ElementRef, static: true })
  demoArea: ElementRef;

  constructor(private service: NgxMousetrapService) {

  }

  ngOnInit() {
    this.subscription = this.service.register(this.keysBound, this.demoArea.nativeElement).subscribe(evt => {
      this.keypressed.push(`Detected ${evt.key}`);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  onClick() {
    this.clickedAt = new Date();
  }
}
