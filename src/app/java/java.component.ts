import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent  {

  course: any[] = [

    {
      courseId: 101, courseName: 'C', coursePrice: 2000, courseDescription: 'C is a general- purpose, procedural computer programming language ', courseImage: '../assets/emp5.jpg' },
    {
      courseId: 102, courseName: 'C#', coursePrice: 4000, courseDescription: 'C# is a general- purpose, multi - paradigm programming language', courseImage: '../assets/emp4.jpg' },
    {
      courseId: 103, courseName: 'PHP', coursePrice: 5000, courseDescription: 'PHP is a general- purpose scripting language especially suited to web development. ', courseImage: '../assets/emp3.jpg'
    },
    {
      courseId: 104, courseName: 'C++', coursePrice: 7000, courseDescription: 'C++ is a middle-level programming language ', courseImage: '../assets/emp2.jpg'
    },
    {
      courseId: 105, courseName: 'Phython', coursePrice: 10000, courseDescription: 'Python is an interpreted, high- level and general - purpose programming language.', courseImage: '../assets/emp1.jpg'
    }

  ]
}
