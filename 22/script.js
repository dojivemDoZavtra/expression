
console.log('sss site.ru zzz site.com kkk'.replace(/(\w+\.ru|\w+\.com)/g, '<a href="http://$&">$&</a>'))
