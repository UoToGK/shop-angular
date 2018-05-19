import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReflectiveInjector } from '@angular/core';
import { Person } from './person';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  @ViewChild("myInput", { read: ViewContainerRef })
  myInput2: ViewContainerRef;
  @ViewChild("tpl") tplRef: TemplateRef<any>;
  @ViewChild("tpl") tpl: TemplateRef<any>;
  @ViewChild("tpl", { read: ViewContainerRef })
  tplVcRef: ViewContainerRef;
  constructor(protected router: Router) {}

  ngOnInit() {
    var source = Observable.of("Semlinker", "Lolo");

    source.subscribe({
      next: function(value) {
        console.log(value);
      },
      complete: function() {
        console.log("complete!");
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class..
    // 页面中的<!--template bindings={}-->元素
    let commentElement = this.tpl.elementRef.nativeElement;
    // 创建内嵌视图
    let embeddedView = this.tpl.createEmbeddedView(null);
    // 动态添加子节点
    embeddedView.rootNodes.forEach(node => {
      commentElement.parentNode.insertBefore(node, commentElement.nextSibling);
    });
    console.log(this.tplVcRef, this.tpl);
    this.tplVcRef.createEmbeddedView(this.tplRef);
  }
  private login() {
    this.router.navigate(["/app/home"]);
  }
  data= [ {
      "instOper" : "admini",
      "instDate" : "20180103",
      "instTime" : "101816",
      "userId" : "666666",
      "userName" : "test",
      "userStatus" : "1",
      "onlineSessionNum" : 0,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "",
      "lastLoginDate" : "",
      "lastLoginTime" : "",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "dev",
      "instDate" : "20180108",
      "instTime" : "145027",
      "userId" : "dengyc",
      "userName" : "张某",
      "userStatus" : "1",
      "onlineSessionNum" : 3,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.101",
      "lastLoginDate" : "20180108",
      "lastLoginTime" : "150119",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "dev",
      "instDate" : "20180105",
      "instTime" : "160000",
      "userId" : "wangweixin",
      "userName" : "王伟新",
      "userStatus" : "1",
      "onlineSessionNum" : 0,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "",
      "lastLoginDate" : "",
      "lastLoginTime" : "",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "dev",
      "instDate" : "20180105",
      "instTime" : "165049",
      "userId" : "wsdwg123",
      "userName" : "wsdwg123",
      "userStatus" : "1",
      "onlineSessionNum" : 0,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "",
      "lastLoginDate" : "",
      "lastLoginTime" : "",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "dev",
      "instDate" : "20180105",
      "instTime" : "154204",
      "userId" : "yangxiaojuan",
      "userName" : "杨小娟",
      "userStatus" : "1",
      "onlineSessionNum" : 3,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.39",
      "lastLoginDate" : "20180105",
      "lastLoginTime" : "154627",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "xuguanping",
      "instDate" : "20171031",
      "instTime" : "090752",
      "userId" : "123598",
      "userName" : "dev",
      "nickName" : "dev",
      "userStatus" : "1",
      "orgId" : "0000",
      "onlineSessionNum" : 1,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.118",
      "lastLoginDate" : "20171031",
      "lastLoginTime" : "091058",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "xuguanping",
      "instDate" : "20171031",
      "instTime" : "090943",
      "modiOper" : "dev",
      "modiDate" : "20171120",
      "modiTime" : "113943",
      "userId" : "admini",
      "userName" : "dev",
      "userStatus" : "1",
      "orgId" : "0000",
      "onlineSessionNum" : 8974,
      "lockFlag" : "0",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.116",
      "lastLoginDate" : "20180108",
      "lastLoginTime" : "145649",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instDate" : "20171129",
      "instTime" : "134321",
      "modiOper" : "dev",
      "modiDate" : "20171208",
      "modiTime" : "163032",
      "userId" : "dev",
      "userName" : "dev",
      "nickName" : "dev",
      "userStatus" : "1",
      "orgId" : "0000",
      "onlineSessionNum" : 18678,
      "lockFlag" : "0",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.253",
      "lastLoginDate" : "20180108",
      "lastLoginTime" : "151426",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "dev",
      "instDate" : "20171128",
      "instTime" : "165211",
      "userId" : "wancheng",
      "userName" : "万成",
      "nickName" : "万",
      "userStatus" : "1",
      "orgId" : "0000",
      "onlineSessionNum" : 1,
      "lockFlag" : "0",
      "lockDate" : "",
      "lockTime" : "",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.249",
      "lastLoginDate" : "20171226",
      "lastLoginTime" : "162641",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    }, {
      "instOper" : "dev",
      "instDate" : "20171207",
      "instTime" : "092726",
      "userId" : "yangyq",
      "userName" : "yangyqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "nickName" : "yangyq",
      "userStatus" : "1",
      "orgId" : "0000",
      "onlineSessionNum" : 58,
      "lockFlag" : "0",
      "loginNum" : 0,
      "lastLoginIp" : "172.24.17.248",
      "lastLoginDate" : "20180106",
      "lastLoginTime" : "171350",
      "modiPwdDate" : "",
      "modiPwdTime" : ""
    } ]
  



  
  setting={
    
    needSwipe: true,
    columns: [ // 需要展示的列数据配置
        {
            field: 'userName',
            headerTitle: '客户名称',
            width: '10%',
            isShowMobile: false  // 在移动端是否展示这列字段的数据。 false: 默认，展示；true: 不展示，隐藏
        },
        {
            field: 'orgId',
            headerTitle: '地区',
            width: '10%',
            isShowMobile: false
        }

    ],
    pcActionGroup: [ // pc 端浮动操作按钮： 编辑，删除，展示
        {
            title: '详情',
            //icon: 'fa fa-trash-o'
            pcActionEvent: this.showDetail.bind(this)
        },
        {
            title: '编辑',
            //icon: 'fa fa-list',
            pcActionEvent: this.doEdit.bind(this)
        },
        {
            title: '删除',
            //icon: 'fa fa-pencil-square-o'
            pcActionEvent: this.doDelete.bind(this)
        }
        
    ],
    mobileActionGroup: [ // 移动端操作按钮
        {
            //title:'展示',
            icon: 'fa fa-list',
            mobileActionEvent: this.showDetail.bind(this)
        },
        {
            //title:'编辑',
            icon: 'fa fa-pencil-square-o',
            mobileActionEvent: this.doEdit.bind(this)
        },
        {
            //title:'删除',
            icon: 'fa fa-trash-o',
            mobileActionEvent: this.doDelete.bind(this)
        }
       

    ]
  
  }
  showDetail (item:any) {

  }
  doEdit(){

  }
  doDelete(){

  }
}
