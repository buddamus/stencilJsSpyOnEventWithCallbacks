import { Component, Prop, h, Event, EventEmitter, State, Watch } from '@stencil/core';
import { format } from '../../utils/utils';

export interface DoEvent {
  foo:string,
  successHandler:(val:string)=>void
  errorHandler:(err:any)=>void,
  test:boolean
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Event() doEvent:EventEmitter<DoEvent>;
  /**
   * The first name
   */
  @Prop() first: string ="";

  /**
   * The middle name
   */
  @Prop() middle: string ="";

  /**
   * The last name
   */
  @Prop() last: string ="";

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @State() _value:string = undefined;
  
  @Watch('last')
  watchLast(){
    this.doEvent.emit({
      errorHandler:(err)=>{console.error(err)},
      successHandler:(val)=>{this._value = val},
      foo:"bar",
      test:true
    });
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}. Value: {this._value}</div>;
  }
}
