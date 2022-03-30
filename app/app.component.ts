import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'my-app',
  template: `
    <ng-template #template>
       <span class="k-icon k-i-error" ng-reflect-klass="k-icon" (click)="notificationInstance.hide()"></span> Error! I will hide after you click the 'Close' button.
    </ng-template>
    <button class="k-button" (click)="show()">Show</button>
  `
})
export class AppComponent {
    @ViewChild('template', { read: TemplateRef })
    public notificationTemplate: TemplateRef<any>;

  

    constructor(private notificationService: NotificationService) {}

    public show(): void {
      let notificationInstance;
        notificationInstance = this.notificationService.show({
            content: this.notificationTemplate,
            animation: { type: 'slide', duration: 300 },
            position: { horizontal: 'right', vertical: 'top' },
            type: { style: 'error', icon: false },
            closable: true
        });

        setTimeout(() => {
          if(notificationInstance){
                      notificationInstance.hide()
          }
          
        }, 10000);
    }
}
