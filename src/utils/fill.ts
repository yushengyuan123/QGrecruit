import {notice} from '@/utils/FailMessage'

export function withoutContent(key: string): void {
    switch (key) {
        case 'name': {console.log('nihao'); notice.ErrorNotice('请填写名字'); break};
        case 'sex': {notice.ErrorNotice('请填写性别'); break};
        case 'fail': {notice.ErrorNotice('请填写挂科情况'); break};
        case 'number': {notice.ErrorNotice('请填写学号'); break};
        case 'allScore': {notice.ErrorNotice('请填写绩点'); break};
        case 'grade': {notice.ErrorNotice('请填写年级'); break};
        case 'class': {notice.ErrorNotice('请填写班级'); break};
        case 'duty': {notice.ErrorNotice('请填写班级职务'); break};
        case 'phone': {notice.ErrorNotice('请填写手机'); break};
        case 'qq': {notice.ErrorNotice('请填写qq'); break};
        case 'direction': {notice.ErrorNotice('请填写方向'); break};   
        case 'CommunityDes': {notice.ErrorNotice('请填写社团情况'); break}; 
        case 'whyQG': {notice.ErrorNotice('请填写大学规划'); break};   
    }
}
