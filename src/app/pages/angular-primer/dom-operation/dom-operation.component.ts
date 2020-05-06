import { Component, AfterContentInit, Renderer2, ElementRef, RendererStyleFlags2 } from '@angular/core';

@Component({
  selector: 'app-dom-operation',
  templateUrl: './dom-operation.component.html',
  styleUrls: ['./dom-operation.component.less']
})
export class DomOperationComponent implements AfterContentInit {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  dom: HTMLBaseElement;

  ngAfterContentInit(): void {
    this.dom = this.elementRef.nativeElement;
  }

  /**
   * 实现此回调以便创建宿主元素的实例。
   * @param name 	string	对新元素的标识名，在指定的命名空间内应该是唯一的。
   * @param namespace string	新元素的命名空间。可选. 默认值是 undefined.
   */
  createElement(name: string, namespace?: string): any {

  }

  /**
   * 实现此回调以便向宿主元素的 DOM 中添加一个注释。
   * @param value 	string	注释文本。
   */
  createComment(value: string): any {

  }

  /**
   * 实现此回调以便向宿主元素的 DOM 中添加文本。
   * @param value string	文本字符串。
   */
  createText(): any {
    this.renderer.createText('createText');
  }

  /**
   * 把子元素追加到宿主元素 DOM 中的指定父节点下。
   * @param parent 	父节点。
   * @param newChild 新的子节点
   */
  appendChild(): void {
    this.renderer.appendChild(this.dom, '<span>createText</span>');
  }

  /**
   * 实现此回调，以便往宿主元素中父节点的指定位置插入一个子节点。
   * @param parent 	父节点
   * @param newChild 	新的子节点
   * @param refChild 将会插入在这个新节点之前的现有节点。
   */
  insertBefore(parent: any, newChild: any, refChild: any): void { }

  /**
   * 实现此回调以便从宿主元素的 DOM 中移除一个子节点。
   * @param parent 	父节点
   * @param oldChild 要移除的子节点
   * @param isHostElement 	可选值，用于告诉渲染器该元素是否宿主元素 可选. 默认值是 undefined.
   */
  removeChild(): void {
    this.renderer.removeChild(this.dom, '<span>createText</span>');
  }

  /**
   * 实现此回调以准备将其作为根元素进行引导的元素，返回该元素的实例。
   * @param selectorOrNode 	DOM 元素。
   * @param preserveContent 根元素的内容是应该保留还是在启动期间清除（默认行为）。 和 ViewEncapsulation.ShadowDom 联用以支持使用 <slot> 元素进行简单的原生内容投影。可选. 默认值是 undefined.
   */
  private selectRootElement(selectorOrNode: any, preserveContent?: boolean): any { }
  private parentNode(node: any): any { }
  private nextSibling(node: any): any { }
  private setAttribute(el: any, name: string, value: string, namespace?: string): void { }
  private removeAttribute(el: any, name: string, namespace?: string): void { }
  private addClass(el: any, name: string): void { }
  private removeClass(el: any, name: string): void { }
  private setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void { }
  private removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void { }
  private setProperty(el: any, name: string, value: any): void { }
  private setValue(node: any, value: string): void { }
  private listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => { };
}
