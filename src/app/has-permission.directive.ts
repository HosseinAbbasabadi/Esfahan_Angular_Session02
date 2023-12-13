import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective {
  permissions: string[] = [
    'Add_Task',
    'Clear_All_Tasks'
  ]

  neededPermission: string = '';

  constructor(
    //private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input()
  set hasPermission(val: string) {
    this.neededPermission = val;
    this.updateView();
  }

  private updateView() {
    if (this.permissions.find(x => x == this.neededPermission)) {
      //this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear();
    }
  }
}
