export interface Language {
  language: string;
  url: string | string[];
  checked: boolean;
}
export const languages: Language[] = [{
  language: 'korean' ,
  url: 'https://en.dict.naver.com/#/search?query=',
  checked: false 
},
{
  language: 'japanese' ,
  url: 'https://jisho.org/search/',
  checked: false 
},
//{
//  language: 'mandarin' ,
//  url: ['https://mandarinspot.com/dict?word=', '&phs=pinyin&sort=rel'],
//  checked: false 
//}
]