import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date): string {
    let date = new Date(value);
    const now = new Date();
    let seconds = (now.valueOf() - date.valueOf()) / 1000

    var numyears = Math.floor(seconds / 31536000);
    var numdays = Math.floor((seconds % 31536000) / 86400);
    var numMonths = numdays / 30 | 0;
    numdays = numdays % 30 | 0;

    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;


    let start = "منذ "
    let days = ["", "يوم", "يومين"]
    let day2 = numdays < 3 ? days[numdays] : numdays + " ايام "
    let years = ["", "سنة", "سنتين"]
    let year2 = numyears < 3 ? years[numyears] : numyears + " سنوات "
    let hours = ["", "ساعة", "ساعتين"]
    let hour2 = numhours < 3 ? hours[numhours] : numhours + " ساعات"
    let months = ["", "شهر", "شهرين"]
    let month2 = numMonths < 3 ? months[numMonths] : numMonths + " أشهر"
    let minutes = ["", "دقيقة", "دقيقتين"]
    let minutes2 = numminutes < 3 ? minutes[numminutes] : numminutes + " دقائق"

    if (numminutes > 10) minutes2 = numminutes + " دقيقة";
    if (numdays > 10) day2 = numdays + " يوم";
    if (numhours > 10) hour2 = numhours + " ساعة";
    if (numyears > 10) year2 = numyears + " سنة";
    if (numMonths > 10) month2 = numMonths + " شهر";


    if (year2 + month2 + day2 + hour2 == "") {
      return `${start} ${minutes2}`
    } else if (year2 + month2 + day2 == "") {
      return `${start} ${hour2} و${minutes2}`
    } else if (year2 + month2 == "") {
      return `${start} ${day2} و${hour2} `
    } else if (year2 == "") {
      return `${start} ${month2} و${day2}`
    } else {
      return `${start} ${year2} و${month2}`

    }

  }

}
