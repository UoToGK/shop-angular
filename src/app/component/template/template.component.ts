import {
  Component,
  TemplateRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <h1>Welcome to Angular World</h1>
    <ng-template #tpl>
      <span>I am span in template</span>
    </ng-template>
  `
}) //是ng-template,不再是template
/* 
现在ng4 变成了ng-template，没法原生的不现实内容了。
这样改是不是为了兼容不支持template标签的文档。 */
export class TemplateComponent {
  name: string = "Semlinker";

  @ViewChild("tpl") tpl: TemplateRef<any>;

  ngAfterViewInit() {
    let embeddedView = this.tpl.createEmbeddedView(null);
     console.dir(this.tpl
    );
    console.dir(embeddedView);
  }
}
