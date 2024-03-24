// @ts-ignore
import type {WriteContractErrorType} from "@wagmi/core";

export const matchConAddress = (
  startWith?: string,
  contain?: string,
  endWith?: string,
  // @ts-ignore
  address: string
) => {

  address = address.substring(2)

  console.log(address, 111);

  // 检查是否符合 startWith 条件
  if (startWith && !address.startsWith(startWith)) {
    return false;
  }

  // 检查是否符合 contain 条件
  if (contain && !address.includes(contain)) {
    return false;
  }

  // 检查是否符合 endWith 条件
  if (endWith && !address.endsWith(endWith)) {
    return false;
  }

  // 如果以上条件都符合，则返回 true
  return true;
}

// export const filterErrorMsg = (error: string) => {
//   let msg = ""
//   const regex = /Details:(.*?)Version:(.*?)/s; // 使用/s标志匹配多行
//   const match = error.match(regex);
//   if (match) {
//     msg = match[1].trim();
//     return msg
//   }
//   return "unknown error"
// }

export const truncateText = (text:string, maxLength:number) => {
  if (text.length <= maxLength) {
    return text; // 如果文本长度小于等于最大长度，则直接返回原始文本
  }

  const frontPart = text.slice(0, 6); // 获取前面5个字符
  const middlePart = '...'; // 使用省略号代替中间部分
  const backPart = text.slice(-4); // 获取后面3个字符

  return `${frontPart}${middlePart}${backPart}`;
}



