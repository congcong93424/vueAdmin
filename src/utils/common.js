
import { Message } from 'element-ui';
export function commom_uploadImg(file,dom) {
    var file = file.file
    // console.log(file);
    if(!/image\/\w+/.test(file.type)){
        Message.error('请上传图片');
      return false;
    }
    //在此限制图片的大小
    var imgSize = file.size;
    if(imgSize>1*1024*1024){
        Message.error('上传的图片大于1M,请重新选择');
        return false;
    }
    // 图片预览
    var reads= new FileReader();
    reads.readAsDataURL(file);
    reads.onload=function (e) {
        dom.src=this.result;
    };
}