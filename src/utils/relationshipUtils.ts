// 关系类型定义
export interface Relationship {
  id: string;
  name: string;
  generation: number;
  appellation?: {
    male: string;
    female: string;
  };
}

// 基本关系定义
export const relationships: Relationship[] = [
  // 直系长辈
  { id: 'f', name: '父亲', generation: 1, appellation: { male: '爸爸', female: '爸爸' } },
  { id: 'm', name: '母亲', generation: 1, appellation: { male: '妈妈', female: '妈妈' } },
  { id: 'ff', name: '爷爷', generation: 2, appellation: { male: '爷爷', female: '爷爷' } },
  { id: 'fm', name: '奶奶', generation: 2, appellation: { male: '奶奶', female: '奶奶' } },
  { id: 'mf', name: '外公', generation: 2, appellation: { male: '外公', female: '外公' } },
  { id: 'mm', name: '外婆', generation: 2, appellation: { male: '外婆', female: '外婆' } },

  // 平辈
  { id: 'h', name: '丈夫', generation: 0, appellation: { male: '丈夫', female: '老公' } },
  { id: 'w', name: '妻子', generation: 0, appellation: { male: '老婆', female: '妻子' } },
  { id: 'ob', name: '哥哥', generation: 0, appellation: { male: '哥哥', female: '哥哥' } },
  { id: 'lb', name: '弟弟', generation: 0, appellation: { male: '弟弟', female: '弟