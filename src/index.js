module.exports = function toReadable (number) {
  var res='';
  var str;
  var ones=['','one','two','three','four','five','six','seven','eight','nine'];
  var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var ts1;
  var ts2;
  var ts3;
  var th1;
  var th2;
  var th3;
  var td1;
  n=number;
  if (n>=1000000){
    console.log(Math.floor(n/1000000)/1000);
    if ((Math.floor(n/1000000))>1000){
      console.log('1000');
      if ((Math.floor(n/1000000)/1000)<10){
        console.log(Math.floor((Math.floor(n/1000000))/1000));
        ts1=(ones[Math.floor((Math.floor(n/1000000))/1000)]) + " thousand ";
        }
      else if ((Math.floor(n/1000000))/1000>=10 ||(Math.floor(n/1000000))/1000<20 ){
        ts1=(teens[(Math.floor(n/1000000))/1000-10]);
       }
      console.log(ts1);
    }
    console.log(Math.floor(n/1000000)%1000);
    if ((Math.floor(n/1000000)%1000)<10){
      ts2=(ones[((Math.floor(n/1000000)%1000))%1000]);
    }
    else if (((Math.floor(n/1000000)%1000)%1000)>=10 && ((Math.floor(n/1000000)%1000)%1000)<20 ){
      console.log("2222");
      ts2=(teens[((Math.floor(n/1000000)%1000)%1000)-10]);
    }
    else {
      console.log("3333");
      console.log(Math.floor((Math.floor(n/1000000)%1000)/100));
      ts2=ones[(Math.floor((Math.floor(n/1000000)%1000)/100))]+" hundred ";
    }
    console.log((Math.floor(n/1000000)%1000)%100);
    if (((Math.floor(n/1000000)%1000)%100)<10){
      ts3=(ones[((Math.floor(n/1000000)%1000)%100)]);
    }
    if (((Math.floor(n/1000000)%1000)%100)>=10 && (((Math.floor(n/1000000)%1000)%100)<20)){
      ts3=(teens[((Math.floor(n/1000000)%1000)%100)-10]);
    }
    else {
      console.log(Math.floor((Math.floor(n/1000000)%1000)%100/10));
      ts3=ones[Math.floor((Math.floor(n/1000000)%1000)%100/10)]+" "+ones[(Math.floor(n/1000000)%1000)%100%10];
    }
    res=ts1+ts2+ts3+" million ";
 /*  res=Math.floor(n/1000000)+" million "+(n%1000000);*/
  }
  else if (n>=1000){
    if ((Math.floor(n/1000))<10){
        th1=(ones[(Math.floor(n/1000))]);
        }
    else if ((Math.floor(n/1000))>=10 ||(Math.floor(n/1000))<20 ){
      th1=(teens[(Math.floor(n/1000))-10]);
    }
    console.log((n%1000));
    if ((n%1000)<10){
      console.log("1111");
      th2=(ones[(n%1000)]);
    }
    else if ((n%1000)>=10 && (n%1000)<20 ){
      console.log("2222");
      th2=(teens[(n%1000)-10]);
    }
    else {
      console.log("3333");
      th2=ones[Math.floor((n%1000)/100)]+" hundred ";
    }
    console.log(((n%1000)%100));
    if (((n%1000)%100)<10){
      th3=ones[((n%1000)%100)];
      }
    else if (((n%1000)%100)>=10 && ((n%1000)%100)<20){
      console.log("-----");
      th3=teens[((n%1000)%100)-10];
    }
    else {
      th3=tens[Math.floor(((n%1000)%100)/10)]+" "+ones[((n%1000)%100)%10]
    }
    
    res=th1+" thousand "+th2+th3;
    }
  else if (n>99){
    if ((n%100)<10){
      td1=ones[n%100];
    }
    else if ((n%100)>=10 && ((n%100)<20)){
      td1=teens[(n%100)-10];
    }
    else{
      td1=tens[Math.floor((n%100)/10)]+" "+ones[((n%100))%10];
    }
	  res=ones[Math.floor(n/100)]+" hundred "+td1;
  }
  else if (n<10){
	  res=ones[n]
  }
  else if (n>=10 && n<20){
	  res=teens[n-10];
  }
  else{
	  res=tens[Math.floor(n/10)]+" "+ones[n%10];
  }
  console.log(res);
  return (res);
}
