Выполнил всё кроме последнего пункта, т.к. не получилось обойти требование пароля, брал уже абсолютно пустые, только что созданные пдф-файлы, всё равно требует пароль.
Нашёл файл и место где прописан вызов данного окна, а именно в файле Vintasoft.Imaging.DocumentViewer.js сам код :


n=new a.WebUiLabelElementJS({
text:"This document is password protected. Please enter a password.",
localizationId:"pleaseEnterPasswordLabel"
}),
l=new a.WebUiLabelElementJS({
text:"Password:",
localizationId:"passwordLabel"
}),
e=new a.WebUiInputElementJS({
type:"password"
});
this._1459=e;
var k=new a.WebUiLabelElementJS({
text:"Incorrect password",
localizationId:"incorrectPasswordLabel"
});
this._8796=k;
var h=new a.WebUiCheckboxWithLabelJS({
onChange:{
callback:function(a,b){
var c=a.data.p,e=b._3383()?"text":"password";
c._1459._3898.attr("type",e)},data:{p:this}
}},
{text:"Show password",localizationId:"showPasswordLabel"});
this._5089=h;
this._1108=c;
this._6441=null;
g.constructor.call(this,[n,"br","br",l,e,"br",h,"br","br",k,"br"],b);
f.authenticationSucceeded=function(a,b){};
delete f.authenticationSucceeded;

пытался убать данный вызов, но из-за того что не совсем понятная архитектура и слишком много вложенных вызовов, не получилось.
