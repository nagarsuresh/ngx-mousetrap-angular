# NgxMousetrap

An Angular library to use [mousetrap](https://www.npmjs.com/package/mousetrap) as Angular service or Angular Directive.

## Getting Started

### Using as Directive
```
<button class="btn btn-primary"  (click)="onClick()" [ngxMousetrapKey]="'command+enter | ctrl+enter'">Click or press (command/ctrl)+enter</button>

```

When the keyboard shortcut is pressed, button will get clicked!

### Using as Angular Service
```
    const saveKey = 'command+s | ctrl+s'
    this.subscription = this.ngxMousetrapService.register(saveKey).
      subscribe(evt => {
        <!-- save hotkey pressed -->
      });

```

## Demo
https://nagarsuresh.github.io/ngx-mousetrap-angular/

## NPM
https://www.npmjs.com/package/ngx-mousetrap

