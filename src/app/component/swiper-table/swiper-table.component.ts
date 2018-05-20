import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-swiper-table',
  templateUrl: './swiper-table.component.html',
  styleUrls: ['./swiper-table.component.css']
})
export class SwiperTableComponent implements OnInit {

  
  constructor() { }
  @Input() public data: any; // table 表单数据
  @Input() public setting: any; // table 设置项
  @Output() onSwiperEdited: EventEmitter<any> = new EventEmitter(); // 结束编辑: 点击其他行发送事件
  @Output() onSwiperEditBlur: EventEmitter<any> = new EventEmitter(); // 结束编辑： 每个input失去焦点发送事件
  @Output() onSwiperEditFocus: EventEmitter<any> = new EventEmitter(); // 每个input获取焦点发送事件
  public selected: any = []; // 当配置为单选或者是多选时，选中状态的数据
  public swiperEditData: any = []; // 记录下编辑的数据

  private mobileActionBoxWidth: number; // 移动端操作按钮容器的宽度，根据按钮的多少自动调整宽度
  private expenseing: any = {}; // 记录下正在展开的行，目前处理每次只展示开一行

  ngOnInit() {
      if(this.setting.mobileActionGroup){
          let len = this.setting.mobileActionGroup.length; 
          if(len < 5){
              this.mobileActionBoxWidth = 68 * len + 12;
          }else{
              this.mobileActionBoxWidth = 68 * 4 + 12; // 多于4个按钮，分两层展示，一层为4个，20为间隙（移动端多于8个按钮：请自行处理）
          }
      }
      
  }

  public initState(item: any) { // 状态初始化操作，当前行处理为折叠状态
      if(this.expenseing.swiperState && this.expenseing.swiperState == "expense"){ // 将其他展开的行折叠
          this.expenseing.swiperState = "collapse";
          this.expenseing.moveX = 0;
          this.expenseing = {};
      }
      item.swiperState = "collapse"; //"collapse"; // collapse: 折叠状态， expense: 展开状态, touching: 拖动展开中
      item.moveX = 0;
  }

  public expenseState(item: any) { // 展开操作： 将当前行处理为展开状态
      item.swiperState = "expense";
      this.expenseing = item;
      let len = this.setting.mobileActionGroup.length; // 移动端操作按钮数量
      // console.log(len);
      if(len < 5){
          item.moveX = -68 * len - 12;
      }else{
          item.moveX = -68 * 4 - 12; // 多于4个按钮，分两层展示，一层为4个，20为间隙（移动端多于8个按钮：请自行处理）
      }
      
  }


  public touchstartTable(event:any, item:any) { // 开始拖动
      if (this.setting.needSwipe) {
          this.initState(item);
          item.startX = event.touches[0].pageX;
      }
  }

  public touchmoveTable(event:any, item:any) { // 拖动ing
      if (this.setting.needSwipe) {
          item.swiperState = "touching";
          if (item.startX - event.touches[0].pageX > 15) {
              item.showMobileAction = true; // 展示移动端操作按钮
              item.moveX = (item.startX - event.touches[0].pageX) * -1;
          }
      }
      
  }

  public touchendTable(event:any, item:any) { // 结束拖动
      //console.log(item.moveX);

      if (item.moveX < -150) {
          this.expenseState(item);
      } else {
          this.initState(item);
      }
  }

  /**
   * 单元格单击事件
   */
  cellclick(cell:any,row:any,colSetting:any){
      if(!row.swiperEdit && this.swiperEditData.length>0){ // 是否已经有正在编辑中的行: 默认为单行编辑
          this.onSwiperEdited.emit(this.swiperEditData[0]);
          // console.log(this.swiperEditData[0]);
          this.swiperEditData[0].swiperEdit = false;
          this.swiperEditData = [];
      }
      if(colSetting.editable){ // 这行是否可编辑
          if(row.swiperEdit){
              return ;
          }
          this.swiperEditData.push(row);
          row.swiperEditData = {...row}; // 浅拷贝一个对象

          row.swiperEdit = true;
      }
      
  }

  /**
   * 单元格双击事件
   */
  cellclickdblclick(cell:any){
      // console.log('组件')
      // console.log(cell)
  }

  /**
   * 行单击事件
   * @param row 
   */
  rowClick(row:any){
      if(this.setting.selectorMode && this.selected.length==0){ // 当数据回显，且为第一次点击.收集已经回显的数据到选中状态数组
          this.data.forEach( (v:any) => {
              if(v.activite == true){
                  this.selected.push(v);
              }
          });
      }
      if(this.setting.selectorMode === "single"){ // 单选处理
          if(this.selected[0] && this.selected[0].activite){
              this.selected[0].activite = false;
          }
          row.activite = true;
          this.selected = [];
          this.selected.push(row);
      }else if(this.setting.selectorMode === "multiple"){ // 多选处理
          if(row.activite == true){
              let len = this.selected.length;
              for (let index = 0; index < len; index++) {
                  if(row == this.selected[index]){
                      row.activite = false;
                      this.selected.splice(index,1);
                  }
                  
              }
          }else{
              row.activite = true;
              this.selected.push(row);
              this.selected;
          }     
      }
  }

  /**
   * 行双击事件
   * @param row 
   */
  rowDoubleClick(row:any){

  }

  /**
   * 编辑中的input失去焦点事件
   */
  editInputBlur(row:any){
      this.onSwiperEditBlur.emit(row);
  }
  /**
   * 编辑中的input获取焦点事件
   */
  editInputFocus(row:any, event:any){
      event.stopPropagation();  
      this.onSwiperEditFocus.emit(row);
  }



}
