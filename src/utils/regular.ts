// @ts-ignore
import $ from 'jquery'
class Regular {
    mobile: any =  /^1[3456789]\d{9}$/;
    email: any =  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/

    //检查手机
    public phone(phoneStr: string): boolean {
        let isMobile = this.mobile.exec(phoneStr);
        return isMobile;
    }

    //检查非空
    public isNotNullTrim(source: any): boolean {
        return !!(source !== null && source !== undefined && source !== 'undefined' && $.trim(source) !== "");
    }

    //检查邮箱
    public isEmail(email: string): boolean {
        let isEmail = this.email.exec(email);
        return isEmail;
    }
}

export const regular = new Regular()
