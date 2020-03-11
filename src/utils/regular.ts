import $ from 'jquery'
class Regular {
    mobile: any =  /^[1][3,4,5,7,8,9][0-9]{9}$/;
    email: any =  /^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/
    Stuname: any = /[\u4e00-\u9fa5-\\·]+/
    allScore: any = /^[0-5]{1}(\\.[0-9]{1,2}){0,1}$/
    stuNum: any = /^[1-9][0-9]{9}$/
    qq: any = /^[1-9][0-9]{4,10}/

    public Check(context: string, type: string) {
        switch (type) {
            case 'name': {
                return this.StuName(context)
            }
            case 'number': {
                return this.number(context)
            }
            case 'allScore': {
                // console.log(this.isScore(context))
                // return this.isScore(context)
                return true
            }
            case 'phone': {
                return this.phone(context)
            }
            case 'qq': {
                return this.isqq(context)
            }
            case 'direction': {
                return this.isNotNullTrim(context)
            }
            case 'CommunityDes': {
                return this.isNotNullTrim(context)
            }
            case 'whyQG': {
                return this.isNotNullTrim(context)
            }
            default: {
                return true
            }
        }
    }

    public StuName(Stuname: any) {
        let isName = this.Stuname.exec(Stuname)
        return isName ? true : '请填写正确的姓名,例:小明'
    }

    //检查绩点
    public isScore(scrore: string) {
        let isScore = this.allScore.exec(Number(scrore))
        return isScore ? true : '请填写正确的绩点,例4.0'
    }

    //检查学号
    public number(number: string) {
        let isnumber = this.stuNum.exec(number)
        return isnumber ? true : '请填写正确的学号,例:3118004982'
    }

    //检查qq
    public isqq(qq: string) {
        let isqq = this.qq.exec(qq)
        return isqq ? true : '请填写正确的qq'
    }

    //检查手机
    public phone(phoneStr: string): any {
        let isMobile = this.mobile.exec(phoneStr);
        return isMobile ? true : '请填写正确的手机'
    }
 
    //检查非空
    public isNotNullTrim(source: any): boolean {
        return !!(source !== null && source !== undefined && source !== 'undefined' && $.trim(source) !== "");
    }

    //检查邮箱
    public isEmail(email: string): any {
        let isEmail = this.email.exec(email);
        return isEmail ? true : '请填写正确的邮箱';
    }
}

export const regular = new Regular()
