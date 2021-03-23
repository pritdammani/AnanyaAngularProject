import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent  {

 course: any[] = [

    { courseId: 101, courseName: 'HTML', coursePrice: 2000, courseDescription: 'Documents designed to be displayed in a web browser.', courseImage: '../assets/emp1.jpg' },
    { courseId: 102, courseName: 'CSS', coursePrice: 6000, courseDescription: 'Language used for describing the presentation of a document ',  courseImage: '../assets/emp2.jpg' },
    {
      courseId: 103, courseName: 'Bootstrap', coursePrice: 8000, courseDescription: 'Bootstrap is a free and open- source CSS framework directed at responsive',  courseImage: '../assets/emp3.jpg' },
    {
      courseId: 104, courseName: 'React.js', coursePrice: 20000, courseDescription: 'React is an open- source, front end, JavaScript library for building user interfaces or UI components.',  courseImage: '../assets/emp4.jpg' },
    {
      courseId: 105, courseName: 'Node.js', coursePrice: 25000, courseDescription: 'Node.js is an open- source, cross - platform, back - end JavaScript runtime environment',  courseImage: '../assets/emp5.jpg' }

  ]
}
