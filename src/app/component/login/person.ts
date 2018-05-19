export class Person {
}
export interface Customer {

    /******* 客户信息管理 *********/
    address?: string;  //详细地址
    custId?: string;
    custName?: string;      //客户名称
    custSource?: string;    //客户来源
    custType?: string        //客户分类
    industryId?: string;     //所属行业
    instDate?: string;     //创建日期
    instTime?: string;       //创建时间
    instUser?: string;      //创建人
    memo?: string;   //附加说明
    url?: string;   //客户网址
    zone?: string;     //所在区域
    modiDate?: string;       //修改时间
    modiTime?: string;       //修改日期
    modiUser?: string;       //修改人
  }