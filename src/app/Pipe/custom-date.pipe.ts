import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date): string {
    let date = new Date(value);
    const now = new Date();
    let diff = new Date(now.valueOf() - date.valueOf())
    console.log(now.valueOf() - date.valueOf())
    let year = diff.getFullYear()
    let month = diff.getMonth() 
    let day = diff.getDay() 
    let hour = diff.getHours() 

    let start = "منذ "
    let days = ["", "يوم", "يومين"]
    let day2 = day < 3 ? days[day] : day + " ايام "
    let years = ["", "سنة", "سنتين"]
    let year2 = year < 3 ? years[year] : year + " سنوات "
    let hours = ["", "ساعة", "ساعتين"]
    let hour2 = hour < 3 ? hours[hour] : hour + " ساعات"
    let months = ["", "شهر", "شهرين"]
    let month2 = month < 3 ? months[month] : month + " أشهر"

    if (year2 + month2 + day2 == "") {
      return `${start} ${hour2}`
    } else if (year2 + month2 == "") {
      return `${start} ${day2} و${hour2}`
    } else if (year2  == "") {
      return `${start} ${month2} و${day2}`
    }else
    {
      return `${start} ${year2} و${month2}`

    }

  }

}
