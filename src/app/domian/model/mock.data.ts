export interface Person {
  userName: string;
  passwordl: string;
  confirmpassword:string;
  tel: string;
  email: string;
  weChat: string;
  qq: string;
  age: number;
  height: number;
  address: string;
  likeColor: string;
  gender?: string; // 性别
  role?: string; // 角色
  theme?: Theme; // 主题
  isActive?: boolean; // 是否激活
  hobbies?: { [key: string]: boolean }; // 爱好
  topics?: string[]; // 话题
  province: string; // 省
  city: string; // 市
}
export interface Theme {
  display: string; // 显示文本
  backgroundColor: string; // 背景颜色
  fontColor: string; // 字体颜色
}
