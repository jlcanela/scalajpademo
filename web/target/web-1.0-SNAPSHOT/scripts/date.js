Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
Date.abbrDayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
Date.abbrMonthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
Date.firstDayOfWeek=1;
Date.format="dd/mm/yyyy";
Date.fullYearStart="20";
(function(){function B(C,D){if(!Date.prototype[C]){Date.prototype[C]=D
}}B("isLeapYear",function(){var C=this.getFullYear();
return(C%4==0&&C%100!=0)||C%400==0
});
B("isWeekend",function(){return this.getDay()==0||this.getDay()==6
});
B("isWeekDay",function(){return !this.isWeekend()
});
B("getDaysInMonth",function(){return[31,(this.isLeapYear()?29:28),31,30,31,30,31,31,30,31,30,31][this.getMonth()]
});
B("getDayName",function(C){return C?Date.abbrDayNames[this.getDay()]:Date.dayNames[this.getDay()]
});
B("getMonthName",function(C){return C?Date.abbrMonthNames[this.getMonth()]:Date.monthNames[this.getMonth()]
});
B("getDayOfYear",function(){var C=new Date("1/1/"+this.getFullYear());
return Math.floor((this.getTime()-C.getTime())/86400000)
});
B("getWeekOfYear",function(){return Math.ceil(this.getDayOfYear()/7)
});
B("setDayOfYear",function(C){this.setMonth(0);
this.setDate(C);
return this
});
B("addYears",function(C){this.setFullYear(this.getFullYear()+C);
return this
});
B("addMonths",function(D){var C=this.getDate();
this.setMonth(this.getMonth()+D);
if(C>this.getDate()){this.addDays(-this.getDate())
}return this
});
B("addDays",function(C){this.setDate(this.getDate()+C);
return this
});
B("addHours",function(C){this.setHours(this.getHours()+C);
return this
});
B("addMinutes",function(C){this.setMinutes(this.getMinutes()+C);
return this
});
B("addSeconds",function(C){this.setSeconds(this.getSeconds()+C);
return this
});
B("zeroTime",function(){this.setMilliseconds(0);
this.setSeconds(0);
this.setMinutes(0);
this.setHours(0);
return this
});
B("asString",function(){var C=Date.format;
return C.split("yyyy").join(this.getFullYear()).split("yy").join((this.getFullYear()+"").substring(2)).split("mmm").join(this.getMonthName(true)).split("mm").join(A(this.getMonth()+1)).split("dd").join(A(this.getDate()))
});
Date.fromString=function(E){var F=Date.format;
var H=new Date("01/01/1977");
var I=F.indexOf("yyyy");
if(I>-1){H.setFullYear(Number(E.substr(I,4)))
}else{H.setFullYear(Number(Date.fullYearStart+E.substr(F.indexOf("yy"),2)))
}var C=F.indexOf("mmm");
if(C>-1){var G=E.substr(C,3);
for(var D=0;
D<Date.abbrMonthNames.length;
D++){if(Date.abbrMonthNames[D]==G){break
}}H.setMonth(D)
}else{H.setMonth(Number(E.substr(F.indexOf("mm"),2))-1)
}H.setDate(Number(E.substr(F.indexOf("dd"),2)));
if(isNaN(H.getTime())){return false
}return H
};
var A=function(C){var D="0"+C;
return D.substring(D.length-2)
}
})();