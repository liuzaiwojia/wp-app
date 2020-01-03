/*
 * @Author: liujia
 * @Date: 2020-01-03 17:27:15
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 17:28:10
 * @description: 工具方法
 */
const copy = (text) => {
  const textarea = document.createElement("textarea"); //创建input对象
  const currentFocus = document.activeElement; //当前获得焦点的元素
  const toolBoxwrap = document.body; //将文本框插入到NewsToolBox这个之后
  toolBoxwrap.appendChild(textarea); //添加元素
  textarea.value = text;
  textarea.focus();
  if (textarea.setSelectionRange) {
      textarea.setSelectionRange(0, textarea.value.length); //获取光标起始位置到结束位置
  } else {
      textarea.select();
  }
  let flag = false;
  try {
      flag = document.execCommand("copy"); //执行复制
  } catch (eo) {}
  toolBoxwrap.removeChild(textarea); //删除元素
  currentFocus.focus();
  return flag;
}

export {
  copy
}